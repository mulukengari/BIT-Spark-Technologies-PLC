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
      className={`group rounded-xl border border-navy/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-electric/40 hover:shadow-lg ${className}`}
    >
      {icon && (
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-lightgray text-electric transition-colors group-hover:bg-electric group-hover:text-white">
          {icon}
        </div>
      )}
      {title && <h3 className="text-lg font-semibold text-navy">{title}</h3>}
      {description && <p className="mt-2 text-sm leading-relaxed text-navy/70">{description}</p>}
      {children}
    </div>
  );
}

export default Card;
