import React from 'react';

import classes from '../components/MoreTaskInfo.module.css';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
const MoreTaskInfo = ({ inf }) => {
  const {date} = useSelector((state) => state.idTaker);
  return (
    <>
      <section className={classes.gapSect}>
        <div className={classes.allInfo}>
          <h1 className={classes.tt}>{inf.title}</h1>
          <p className={classes.txt}>{inf.info}</p>
        </div>

        <div className={classes.buttons}>
          <Link to={`/${date}/add-task`}><button>ADD</button></Link>
          <Link to='edit-task'><button>EDIT</button></Link>
          
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
