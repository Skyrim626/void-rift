import { ReactNode } from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

interface ButtonProps {
  children: ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  onClick?: () => void;
  buttonStyle: string;
  buttonSize?: string;
}

const Button: React.FC<ButtonProps> = ({
  buttonStyle,
  className,
  type,
  onClick,
  buttonSize = "btn--medium",
  children,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={"/"} className="btn-mobile">
      <button
        type={type}
        className={`btn ${checkButtonStyle} ${checkButtonSize} ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
