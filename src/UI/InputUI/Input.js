import React from "react";
import PropTypes from "prop-types";
import '../StylesUI/StylesUI.css';
const Input = React.forwardRef((props,ref) => {

    return (
        <input  className={`${'inputs'} ${props.className}`}
        type={props.type || 'text'}
        id={props.id}
        name={props.name}
        autoComplete='current-password'
        onChange={props.onChange}
        ref={ref}
        defaultValue={props.defaultValue}
          />
    )
});


Input.displayName = 'Input';

Input.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    defaultValue: PropTypes.string

  };
export default Input;