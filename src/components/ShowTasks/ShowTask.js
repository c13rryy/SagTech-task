import React from "react";

import PropTypes from "prop-types";

import classes from "./ShowTask.module.css";
import { Link } from "react-router-dom";
import { checkBox } from "../../store/taskSlice";

import { useDispatch, useSelector } from "react-redux";
import AnimatedPage from "../../pages/Animated";

const ShowTask = (props) => {
  const { date } = useSelector((state) => state.taskSlice);
  const { isChecked } = useSelector((state) => state.taskSlice);
  const dispatch = useDispatch();
  return (
    <>
      <AnimatedPage>
        <section className={classes.sectionTask}>
          <h1>Your Task</h1>
          <ul className={classes.list}>
            {props.info.map((doc) => (
              <li className={classes.listCheck} key={doc.id}>
                <Link className={classes.href} to={`/${date}/${doc.id}`}>
                  {doc.title}
                </Link>
                <input
                  className={classes.check}
                  checked={isChecked.includes(doc.id)}
                  onChange={() => dispatch(checkBox(doc.id))}
                  type="checkbox"
                />
              </li>
            ))}
          </ul>
        </section>
      </AnimatedPage>
    </>
  );
};

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
