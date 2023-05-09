import React from "react";

import PropTypes from "prop-types";

const ShowTask = (props) => {
    return(
      <ul>
       {props.info.map((doc) => (
          <li key={doc.id
          } >
              <h1>{doc.title}</h1>
              <p>{doc.info}</p>
          </li>
        ))}

      </ul>
    )
}


ShowTask.propTypes = {
    info: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        info: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  
export default ShowTask;