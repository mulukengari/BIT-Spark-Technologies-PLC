import React from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-electric">{eyebrow}</p>
      )}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-navy/70">{description}</p>
      )}
    </div>
  );
}

export default SectionHeading;
