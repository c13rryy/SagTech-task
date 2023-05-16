import classes from './PageContent.module.css';
import React from 'react';

import PropTypes from "prop-types";

function PageContent({ title, children }) {
  return (
    <>
    <div className={classes.content}>
      <h1>{title}</h1>
      {children}
    </div>

    </>
  );
}

PageContent.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  };

export default PageContent;