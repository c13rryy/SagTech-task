import "../StylesForStartAndError/StylesForStartAndError.css";
import React from "react";

import PropTypes from "prop-types";

function PageContent({ title, children }) {
  return (
    <>
      <div className={'content'}>
        <h1>{title}</h1>
        {children}
      </div>
    </>
  );
}

PageContent.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PageContent;
