import React from "react";

type CardProps = {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};

export function Card({ title, description, icon, children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-indigo/10 bg-card p-6 ${className}`}
    >
      {icon && (
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-snow-white text-indigo">
          {icon}
        </div>
      )}
      {title && <h3 className="text-lg font-semibold text-navy">{title}</h3>}
      {description && <p className="mt-2 text-sm leading-relaxed text-foreground">{description}</p>}
      {children}
    </div>
  );
}

export default Card;
