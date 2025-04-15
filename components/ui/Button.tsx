import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      style={{
        padding: "0.75rem 1.5rem",
        background: "transparent",
        color: "var(--text-color)",
        border: "2px solid var(--accent-color)",
        borderRadius: "8px",
        fontFamily: "var(--font-family)",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.target as HTMLButtonElement).style.backgroundColor =
          "var(--accent-color)";
        (e.target as HTMLButtonElement).style.color = "var(--bg-color)";
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLButtonElement).style.backgroundColor = "transparent";
        (e.target as HTMLButtonElement).style.color = "var(--text-color)";
      }}
    >
      {children}
    </button>
  );
};

export default Button;
