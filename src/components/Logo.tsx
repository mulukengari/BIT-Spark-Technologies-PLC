import React from "react";

type LogoProps = {
  className?: string;
  showText?: boolean;
};

export function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect x="1" y="1" width="32" height="32" rx="8" fill="#071B49" />
        <path
          d="M10 22 L17 10 L24 22"
          stroke="#0866D6"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M13.5 18 H20.5"
          stroke="#FF8A24"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="17" cy="9" r="2" fill="#FF8A24" />
      </svg>
      {showText && (
        <span className="flex flex-col leading-tight">
          <span className="text-base font-bold tracking-tight text-navy">
            BIT <span className="text-electric">Spark</span>
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-navy/60">
            Technologies PLC
          </span>
        </span>
      )}
    </span>
  );
}

export default Logo;
