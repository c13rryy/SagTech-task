import React from 'react';
import classes from './AddForm.module.css';
import { Form } from 'react-router-dom';
const AddForm = () => {
  return (
    <section className={classes.sectionForm}>
        <h1>Add Task</h1>
      <Form method='post' className={classes.form} >
        <div>
          <label htmlFor="text-title">Title</label>
          <input
            id="text-one"
            type="text"
            name="text-title"
          />
        </div>

        <div className={classes.txt}>
          <label htmlFor="text-info">All info</label>
          <textarea
            className={classes.txt}
            rows="10" cols="50"
            id="text-two"
            name="text-info"
          />
        </div>

        <div className={classes.addButton}> 
            <button>Add</button>
        </div>
      </Form>
    </section>
  );
};

export default AddForm;
