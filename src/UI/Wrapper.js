import React from "react";
import PropTypes from "prop-types";
import classes from  './Wrapper.module.css';
const Wrapper = (props) => {
   return (
    <>
    <div className={`${classes.wrapper} ${props.className ? props.className : ''}`}>
       {props.children}
    </div>
    </>
   )
};


Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};
 

export default Wrapper;