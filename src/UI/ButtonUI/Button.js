import React from 'react';
import PropTypes from "prop-types";
import '../StylesUI/StylesUI.css'
const Button = (props) => {
  return (
   <div className={'buttonLoc'}>
     <button 
    type={props.type || 'button'} 
    className={`${'button'} ${props.className}`}
    disabled={props.disabled}
    onClick={props.onClick}
    >
    
      {props.children}
    </button>
   </div> 
  );
};

Button.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node
  };

export default Button;
