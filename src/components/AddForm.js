import React, {  useRef } from 'react';
import classes from './AddForm.module.css';
/* import { Form } from 'react-router-dom'; */

import { addTask } from '../firebase';
import { useSelector } from 'react-redux';

import { updateTask } from '../firebase';


import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';




const AddForm = ({some}) => {
  const {date} = useSelector(state => state.idTaker)
 /*  const [title, setTitle] = useState('');

  const [text, setText] = useState(''); */


  const navigate = useNavigate();

  const inputRef = useRef(null);

  const textRef = useRef(null);

  const submitHandler = async(e) => {
    e.preventDefault();
   
     const data = {
      title: inputRef.current.value,
      info: textRef.current.value,
      date
     }

     if(some){
      updateTask(some.id, data);

      navigate(`/${date}`, {
        replace: true,
      })
      
     }else{
      addTask(data);
      navigate(`/${date}`, {
        replace: true,
      })
     }



  }

   
  return (
    <section className={classes.sectionForm}>
        <h1>{some ? 'Edit Task' : 'Add Task'}</h1>
      <form  onSubmit={submitHandler} className={classes.form} >
        <div>
          <label htmlFor="text-title">Title</label>
          <input
            id="text-one"
            type="text"
            name="text-title"
            ref={inputRef}
            defaultValue={some ? some.title : ''}
          />
        </div>

        <div className={classes.txt}>
          <label htmlFor="text-info">All info</label>
          <textarea
            className={classes.txt}
            rows="10" cols="50"
            id="text-two"
            name="text-info"
            ref={textRef}
            defaultValue={some ? some.info : ''}
            
          />
        </div>

        <div className={classes.addButton}> 
            <button>{some ? "Edit" : "Add" }</button>
        </div>
      </form>
    </section>
  );
};

AddForm.propTypes = {
  some: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  }),
};
export default AddForm;
