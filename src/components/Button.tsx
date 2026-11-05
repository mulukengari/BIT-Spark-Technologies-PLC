import React from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-electric text-white hover:bg-navy",
  secondary: "bg-orange text-white hover:bg-navy",
  outline: "border border-navy/20 text-navy hover:border-electric hover:text-electric",
  ghost: "text-electric hover:text-navy",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric";
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export default Button;
