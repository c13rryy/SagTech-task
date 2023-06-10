import React from "react";

import '../../Tasks/TasksStyles/Tasks.css';

import { Link, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import PropTypes from "prop-types";
import Button from "../../../UI/ButtonUI/Button";
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
      <section className={'gapSect'}>
        <div>
          <button onClick={goBack} className={'back'}>
            go back
          </button>
        </div>
        <div className={'allInfo'}>
          <h1 className={'tt'}>{inf.title}</h1>
          <p className={'txt'}>{inf.info}</p>
        </div>

        <div className={'buttons'}>
          <Link className={'links'} to={`/${date}/add-task`}>
            <Button className={'butt'}>ADD</Button>
          </Link>
          <Link className={'links'} to="edit-task">
            <Button className={'butt'}>EDIT</Button>
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
