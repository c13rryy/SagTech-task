import React from "react";

import PropTypes from "prop-types";

import classes from './ShowTask.module.css'
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const ShowTask = (props) => {
  const {date} = useSelector((state) => state.idTaker);
    return(
        <>
      <section className={classes.sectionTask}>
        <ul className={classes.list}>
       {props.info.map((doc) => (
          <li key={doc.id 
          } >
              <Link className={classes.href} to={`/${date}/${doc.id}`}>{doc.title}</Link>
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