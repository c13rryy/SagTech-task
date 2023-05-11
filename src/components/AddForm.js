import React, { useState } from 'react';
import classes from './AddForm.module.css';
/* import { Form } from 'react-router-dom'; */

import { addTask } from '../firebase';
import { useSelector } from 'react-redux';


const AddForm = () => {
  const {date} = useSelector(state => state.idTaker)
  const [title, setTitle] = useState('');

  const [text, setText] = useState('');


  const submitHandler = async(e) => {
    e.preventDefault();

     const data = {
      title,
      info: text,
      date
     }

     addTask(data);


  }
  return (
    <section className={classes.sectionForm}>
        <h1>Add Task</h1>
      <form  onSubmit={submitHandler} className={classes.form} >
        <div>
          <label htmlFor="text-title">Title</label>
          <input
            id="text-one"
            type="text"
            name="text-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className={classes.txt}>
          <label htmlFor="text-info">All info</label>
          <textarea
            className={classes.txt}
            rows="10" cols="50"
            id="text-two"
            name="text-info"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className={classes.addButton}> 
            <button>Add</button>
        </div>
      </form>
    </section>
  );
};

export default AddForm;
