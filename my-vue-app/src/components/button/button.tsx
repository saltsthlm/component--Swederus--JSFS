import React from "react";
import styles from "./button.module.css"

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}