import { ReactNode } from "react";
import styles from "./button.module.css";

export function Button({ children, variant = "primary" }: Props) {
  return (
    <button
      className={`${styles.button_cont} ${
        variant === "primary" ? styles.primary : styles.secondary
      }`}
    >
      {children}
    </button>
  );
}

interface Props {
  children?: ReactNode;
  variant?: "primary" | "secondary";
}
