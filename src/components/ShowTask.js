import React from "react";

import PropTypes from "prop-types";

import classes from './ShowTask.module.css'
import { Link } from "react-router-dom";

const ShowTask = (props) => {
    return(
        <>
      <section className={classes.sectionTask}>
        <ul>
       {props.info.map((doc) => (
          <li key={doc.id
          } >
              <Link to='more-info'>{doc.title}</Link>
          </li>
        ))}

      </ul>
      </section>
      </>
    )
}


ShowTask.propTypes = {
    info: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        info: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  
export default ShowTask; 