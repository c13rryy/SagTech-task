import React from "react";
import PropTypes from "prop-types";
import '../StylesUI/StylesUI.css';
const Wrapper = (props) => {
   // TODO: зачем тут <> ?
   return (
    <>
    <div className={`${'wrapper'} ${props.className ? props.className : ''}`}>
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