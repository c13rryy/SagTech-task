import React from 'react';

import classes from '../components/MoreTaskInfo.module.css';

import { Link, useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
const MoreTaskInfo = ({ inf }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(`/${date}`, {
      replace: true,
    })
  }
  const {date} = useSelector((state) => state.idTaker);
  return (
    <>
      <section className={classes.gapSect}>
        <div><button onClick={goBack} className={classes.back}>go back</button></div>
        <div className={classes.allInfo}>
          <h1 className={classes.tt}>{inf.title}</h1>
          <p className={classes.txt}>{inf.info}</p>
        </div>

        <div className={classes.buttons}>
          <Link to={`/${date}/add-task`}><button className={classes.butt}>ADD</button></Link>
          <Link to='edit-task'><button className={classes.butt}>EDIT</button></Link>
          
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
