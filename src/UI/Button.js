import React from 'react';
import PropTypes from "prop-types";
import classes from './Button.module.css'
const Button = (props) => {
  // TODO: можно сделать {...props} внутри компонента button, чтобы все проперти можно было передавать
  return (
   <div className={classes.buttonLoc}>
     <button 
    type={props.type || 'button'} 
    className={`${classes.button} ${props.className}`}
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
