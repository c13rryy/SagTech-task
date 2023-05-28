import React from "react";

import classes from "../InfoAboutTask/MoreTaskInfo.module.css";

import { Link, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import PropTypes from "prop-types";
import Button from "../../UI/Button";
const MoreTaskInfo = ({ inf }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(`/${date}`, {
      replace: true,
    });
  };
  const { date } = useSelector((state) => state.taskSlice);
  return (
    <>
      <section className={classes.gapSect}>
        <div>
          <button onClick={goBack} className={classes.back}>
            go back
          </button>
        </div>
        <div className={classes.allInfo}>
          <h1 className={classes.tt}>{inf.title}</h1>
          <p className={classes.txt}>{inf.info}</p>
        </div>

        <div className={classes.buttons}>
          <Link className={classes.links} to={`/${date}/add-task`}>
            <Button className={classes.butt}>ADD</Button>
          </Link>
          <Link className={classes.links} to="edit-task">
            <Button className={classes.butt}>EDIT</Button>
          </Link>
        </div>
      </section>
    </>
  );
};
MoreTaskInfo.propTypes = {
  inf: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  }).isRequired,
};
export default MoreTaskInfo;
