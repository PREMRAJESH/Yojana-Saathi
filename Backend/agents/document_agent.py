import re
import uuid
import httpx
from abc import ABC, abstractmethod
from typing import Dict, Any, Tuple
from ..config import get_settings

class OCRProvider(ABC):
    """Base interface for OCR Engines."""
    @abstractmethod
    def extract(self, file_bytes: bytes, filename: str, doc_type: str) -> Tuple[Dict[str, Any] | None, float]:
        """Extract text from the file bytes and return parsed fields and confidence score."""
        pass

class OCRSpaceProvider(OCRProvider):
    """OCR.space free-tier REST API implementation."""
    
    def __init__(self):
        self.url = "https://api.ocr.space/parse/image"
        
    def extract(self, file_bytes: bytes, filename: str, doc_type: str) -> Tuple[Dict[str, Any] | None, float]:
        settings = get_settings()
        if not settings.ocr_space_api_key:
            # Degrade gracefully if no API key configured
            return None, 0.0
            
        # Determine content type based on extension
        ext = filename.split(".")[-1].lower() if "." in filename else "jpg"
        mime_type = "application/pdf" if ext == "pdf" else f"image/{ext}"
        if mime_type not in ("application/pdf", "image/png", "image/jpeg", "image/gif"):
            mime_type = "image/jpeg"  # Default fallback
            
        try:
            files = {"file": (filename, file_bytes, mime_type)}
            data = {
                "apikey": settings.ocr_space_api_key,
                "language": "eng",
                "isOverlayRequired": "false",
                "detectOrientation": "true",
                "scale": "true"
            }
            
            # Post request to OCR.space with a strict 10s timeout
            with httpx.Client(timeout=10.0) as client:
                response = client.post(self.url, data=data, files=files)
                
            if response.status_code != 200:
                return None, 0.0
                
            res_json = response.json()
            if res_json.get("OCRExitCode") != 1:
                return None, 0.0
                
            results = res_json.get("ParsedResults", [])
            if not results:
                return None, 0.0
                
            raw_text = results[0].get("ParsedText", "")
            if not raw_text:
                return None, 0.0
                
            # Perform basic regex extraction based on doc_type
            extracted = {"raw_text": raw_text}
            confidence = 0.8  # Default confidence for successful text extraction
            
            if doc_type == "income_certificate":
                # Look for numbers representing income: e.g. Rs. 1,50,000 or Rs. 150000 or Income: 80000
                income_match = re.search(r'(?:rs|inr|income|rupees)\.?\s*([0-9,]+)', raw_text, re.IGNORECASE)
                if income_match:
                    clean_val = income_match.group(1).replace(",", "")
                    try:
                        extracted["annual_income"] = float(clean_val)
                        confidence = 0.9
                    except ValueError:
                        pass
                        
            elif doc_type == "aadhaar":
                # Aadhaar number is 12 digits: e.g. 1234 5678 9012
                aadhaar_match = re.search(r'\b\d{4}\s\d{4}\s\d{4}\b', raw_text)
                if aadhaar_match:
                    extracted["aadhaar_number"] = aadhaar_match.group(0).replace(" ", "")
                    confidence = 0.95
                    
            elif doc_type == "caste_certificate":
                # Look for category keywords
                for cat in ("SC", "ST", "OBC", "General"):
                    if re.search(rf'\b{cat}\b', raw_text, re.IGNORECASE):
                        extracted["social_category"] = cat.lower()
                        confidence = 0.90
                        break
                        
            return extracted, confidence
            
        except Exception:
            # Graceful degradation on timeout/OCR errors
            return None, 0.0
