import React from "react";
import "../StylesUI/StylesUI.css";

interface ButtonTypes {
  type?: "submit" | "button";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonTypes> = (props) => {
  return (
    <div className={"buttonLoc"}>
      <button {...props} className={`${"button"} ${props.className}`}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
