import React, { useCallback, useRef, useState } from "react";
import classes from "./AddForm.module.css";

import { addTask, getDataTask } from "../../../providers/tasks/tasks";
import { useDispatch, useSelector } from "react-redux";

import { updateTask } from "../../../providers/tasks/tasks";

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "../../../UI/Button";
import Wrapper from "../../../UI/Wrapper";
import Input from "../../../UI/Input";
import { infoForCalendar } from "../../../store/information";

const AddForm = ({ some }) => {
  // TODO: рефы использовать плохо, перепиши все формы с react-hook-forms lib
  const dispatch = useDispatch();
  const { date } = useSelector((state) => state.taskSlice);

  const { correctDate } = useSelector((state) => state.taskSlice);

  const [isInputFilled, setIsInputFilled] = useState(false);
  const [isTextareaFilled, setIsTextareaFilled] = useState(false);

  const handleInputChange = () => {
    setIsInputFilled(inputRef.current.value !== "");
  };

  const handleTextareaChange = () => {
    setIsTextareaFilled(textRef.current.value !== "");
  };

  const isButtonDisabled = !(isInputFilled && isTextareaFilled);

  const navigate = useNavigate();

  const inputRef = useRef(null);

  const textRef = useRef(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = {
      title: inputRef.current.value,
      info: textRef.current.value,
      date,
      correctDate,
    };

    if (some) {
      updateTask(some.id, data);

      navigate(`/${date}`, {
        replace: true,
      });
    } else {
      addTask(data);
      navigate(`/${date}`, {
        replace: true,
      });
    }

    await updLoad();
  };

  const goBack = () => {
    navigate(`/${date}`, {
      replace: true,
    });
  };

  const updLoad = useCallback(async () => {
    const loads = await getDataTask();
    dispatch(infoForCalendar(loads));
  }, []);

  return (
    <Wrapper>
      <section className={classes.sectionForm}>
        {!some && (
          <div className={classes.goback}>
            <button onClick={goBack} className={classes.back}>
              go back
            </button>
          </div>
        )}
        <h1 className={classes.tag}>{some ? "Edit Task" : "Add Task"}</h1>
        <form onSubmit={submitHandler} className={classes.form}>
          <div>
            <label htmlFor="text-title">Title</label>
            <Input
              id="text-one"
              type="text"
              name="text-title"
              ref={inputRef}
              defaultValue={some ? some.title : ""}
              onChange={handleInputChange}
            />
          </div>

          <div className={classes.txt}>
            <label htmlFor="text-info">All info</label>
            <textarea
              className={classes.txt}
              rows="10"
              cols="50"
              id="text-two"
              name="text-info"
              ref={textRef}
              defaultValue={some ? some.info : ""}
              onChange={handleTextareaChange}
            />
          </div>

          <div className={classes.addButton}>
            <Button type="submit" disabled={isButtonDisabled}>
              {some ? "Edit" : "Add"}
            </Button>
          </div>
        </form>
      </section>
    </Wrapper>
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
