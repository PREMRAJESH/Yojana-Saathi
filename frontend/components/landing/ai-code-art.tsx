"use client";

export function AiCodeArt() {
  return (
    <svg viewBox="0 0 700 500" fill="none" className="h-full w-full">
      <defs>
        <linearGradient id="lineGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F97316" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#14213D" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#F97316" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Background grid dots */}
      {Array.from({ length: 12 }, (_, row) =>
        Array.from({ length: 18 }, (_, col) => (
          <circle
            key={`dot-${row}-${col}`}
            cx={40 + col * 38}
            cy={30 + row * 40}
            r={1}
            className="fill-ink-navy/20"
          />
        ))
      )}

      {/* Connection lines — animated draw */}
      <g>
        <path
          d="M80 100 C120 60 160 140 200 100 S280 60 320 100 S400 140 440 100"
          stroke="url(#lineGlow)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          className="animate-[drawLine_4s_ease-in-out_infinite]"
          strokeDasharray={800}
          strokeDashoffset={800}
        />
        <path
          d="M80 180 C120 220 160 140 200 180 S280 220 320 180 S400 140 440 180"
          stroke="url(#lineGlow)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          className="animate-[drawLine_5s_ease-in-out_infinite_0.5s]"
          strokeDasharray={800}
          strokeDashoffset={800}
        />
        <path
          d="M100 260 C160 300 220 220 280 260 S340 300 400 260"
          stroke="url(#lineGlow)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          className="animate-[drawLine_4.5s_ease-in-out_infinite_1s]"
          strokeDasharray={800}
          strokeDashoffset={800}
        />
      </g>

      {/* Vertical connection lines */}
      <g>
        <path
          d="M140 60 C120 100 160 140 140 180 S120 220 140 260"
          stroke="#F97316"
          strokeWidth="0.8"
          fill="none"
          opacity="0.3"
          strokeLinecap="round"
          className="animate-[drawLine_6s_ease-in-out_infinite_0.3s]"
          strokeDasharray={800}
          strokeDashoffset={800}
        />
        <path
          d="M300 80 C280 120 320 160 300 200 S280 240 300 280"
          stroke="#14213D"
          strokeWidth="0.8"
          fill="none"
          opacity="0.25"
          strokeLinecap="round"
          className="animate-[drawLine_5.5s_ease-in-out_infinite_0.8s]"
          strokeDasharray={800}
          strokeDashoffset={800}
        />
      </g>

      {/* Orbiting ring */}
      <g className="animate-[spin_20s_linear_infinite] origin-[350px_250px]">
        <ellipse cx="350" cy="250" rx="180" ry="60" stroke="#F97316" strokeWidth="0.8" fill="none" opacity="0.15" />
        <circle cx="530" cy="250" r="4" fill="#F97316" opacity="0.4" />
      </g>
      <g className="animate-[spin_25s_linear_infinite_reverse] origin-[350px_250px]">
        <ellipse cx="350" cy="250" rx="160" ry="50" stroke="#14213D" strokeWidth="0.6" fill="none" opacity="0.12" />
        <circle cx="510" cy="250" r="3" fill="#14213D" opacity="0.35" />
      </g>

      {/* Network nodes */}
      <g>
        <circle cx="80" cy="100" r="5" fill="#F97316" opacity="0.3" className="animate-pulse" style={{ animationDuration: "3s" }} />
        <circle cx="80" cy="100" r="2" fill="#F97316" opacity="0.8" />

        <circle cx="200" cy="100" r="4" fill="#14213D" opacity="0.25" className="animate-pulse" style={{ animationDuration: "4s" }} />
        <circle cx="200" cy="100" r="1.5" fill="#14213D" opacity="0.6" />

        <circle cx="320" cy="100" r="6" fill="#F97316" opacity="0.15" className="animate-pulse" style={{ animationDuration: "2.5s" }} />
        <circle cx="320" cy="100" r="2.5" fill="#F97316" opacity="0.7" />

        <circle cx="440" cy="100" r="3" fill="#14213D" opacity="0.2" className="animate-pulse" style={{ animationDuration: "3.5s" }} />
        <circle cx="440" cy="100" r="1.2" fill="#14213D" opacity="0.5" />
      </g>

      {/* Code brackets */}
      <g className="animate-[fadeInOut_4s_ease-in-out_infinite]" opacity="0.15">
        <text x="560" y="120" fontFamily="monospace" fontSize="32" fill="#F97316" fontWeight="300">&lt;/&gt;</text>
        <text x="580" y="200" fontFamily="monospace" fontSize="24" fill="#14213D" fontWeight="300">{"{ }"}</text>
        <text x="30" y="380" fontFamily="monospace" fontSize="28" fill="#F97316" opacity="0.5" fontWeight="300">[ ]</text>
      </g>

      {/* Floating data lines */}
      <g className="animate-[float_7s_ease-in-out_infinite] opacity-10">
        <line x1="580" y1="300" x2="640" y2="340" stroke="#F97316" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="640" y1="340" x2="620" y2="400" stroke="#14213D" strokeWidth="1" strokeDasharray="3 3" />
      </g>
      <g className="animate-[float_8s_ease-in-out_infinite_1s] opacity-8">
        <line x1="50" y1="200" x2="20" y2="250" stroke="#F97316" strokeWidth="0.8" strokeDasharray="2 4" />
        <line x1="20" y1="250" x2="40" y2="300" stroke="#14213D" strokeWidth="0.8" strokeDasharray="2 4" />
      </g>

      {/* Central connector hub */}
      <g>
        <circle cx="350" cy="250" r="30" fill="none" stroke="#F97316" strokeWidth="0.8" opacity="0.1" className="animate-[spin_15s_linear_infinite] origin-[350px_250px]" strokeDasharray="4 8" />
        <circle cx="350" cy="250" r="20" fill="none" stroke="#14213D" strokeWidth="0.5" opacity="0.08" className="animate-[spin_12s_linear_infinite_reverse] origin-[350px_250px]" />
        <circle cx="350" cy="250" r="3" fill="#F97316" opacity="0.5" className="animate-pulse" style={{ animationDuration: "2s" }} />
      </g>

      {/* Bottom wave accent */}
      <path
        d="M0 460 Q100 420 200 460 T400 460 T600 460 T700 460"
        stroke="#F97316"
        strokeWidth="0.6"
        fill="none"
        opacity="0.08"
        className="animate-[drawLine_8s_ease-in-out_infinite]"
        strokeDasharray={800}
        strokeDashoffset={800}
      />
    </svg>
  );
}
