import React from "react";
import "../StylesUI/StylesUI.css";

interface WrapperType {
  className?: string;
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperType> = (props) => {
  return (
    <div className={`${"wrapper"} ${props.className ? props.className : ""}`}>
      {props.children}
    </div>
  );
};

export default Wrapper;
