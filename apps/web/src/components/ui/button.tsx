import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./button.module.css";

export function Button({
  children,
  variant = "primary",
  size = "md",
  ...props
}: Props) {
  const variantClass =
    variant === "primary" ? styles.primary : styles.secondary;

  const sizeClass =
    size === "sm" ? styles.btn_small : size === "lg" ? styles.btn_lg : "";

  return (
    <button
      className={`${styles.button_cont} ${variantClass} ${sizeClass}`}
      {...props}
    >
      {children}
    </button>
  );
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}
