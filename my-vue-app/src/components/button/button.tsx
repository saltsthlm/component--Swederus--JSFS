import React, { Children } from "react";
import styles from "./button.module.css"

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
    Children,
    onClick, 
    type = "button",
    disabled = false,
    className = "",
    style = {},
}) => {
    return (
        <button
        type={type} 
        onClick={onClick}
        disabled={disabled}
        className={`${style.button}, ${className}`}
        style={style}
        >
        {Children}
        </button>
    );
};
export default Button;