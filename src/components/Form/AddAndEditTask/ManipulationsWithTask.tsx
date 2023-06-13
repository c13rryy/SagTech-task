import React, { useCallback } from "react";
import "../FormStyles/Form.css";
import { addTask, getDataTask } from "../../../providers/tasks/tasks";
import { updateTask } from "../../../providers/tasks/tasks";
import { useNavigate } from "react-router-dom";
import Button from "../../../UI/ButtonUI/Button";
import Wrapper from "../../../UI/WrapperUI/Wrapper";
import { infoForCalendar } from "../../../store/information";
import { useForm, SubmitHandler } from "react-hook-form";
import { InfoFromInput, TasksInfo } from "../../../reusles-types/reusles.types";
import { InformationSlice } from "../../../reusles-types/reusles.types";
import { useAppDispatch, useAppSelector } from "../../../store";

interface SomeProp {
  some?: TasksInfo;
}

const AddForm: React.FC<SomeProp> = ({ some }) => {
  const dispatch = useAppDispatch();
  const { date } = useAppSelector((state) => state.taskSlice);

  const { correctDate } = useAppSelector((state) => state.taskSlice);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<InfoFromInput>({
    defaultValues: {
      title: some?.title,
      info: some?.info,
    },
  });

  const submitHandler: SubmitHandler<InfoFromInput> = async (data) => {
    const formData = {
      title: data.title,
      info: data.info,
      date,
      correctDate,
    };

    if (some) {
      updateTask(some.id, formData);

      navigate(`/${date}`, {
        replace: true,
      });
    } else {
      addTask(formData);
      navigate(`/${date}`, {
        replace: true,
      });
    }

    await updLoad();
  };

  const goBack = (): void => {
    navigate(`/${date}`, {
      replace: true,
    });
  };

  const updLoad = useCallback(async () => {
    const loads: InformationSlice[] | undefined = await getDataTask();
    if (loads !== undefined) {
      dispatch(infoForCalendar(loads));
    }
  }, []);

  return (
    <Wrapper>
      <section className={"sectionForm"}>
        {!some && (
          <div className={"goback"}>
            <button onClick={goBack} className={"back"}>
              go back
            </button>
          </div>
        )}
        <h1 className={"tag"}>{some ? "Edit Task" : "Add Task"}</h1>
        <form onSubmit={handleSubmit(submitHandler)} className={"form"}>
          <div>
            <label htmlFor="text-title">Title</label>
            <input
              autoComplete="current-password"
              className="inputs"
              id="text-one"
              type="text"
              {...register("title", { required: true })}
            />
          </div>

          <div className={"txt"}>
            <label htmlFor="text-info">All info</label>
            <textarea
              className={"txt"}
              rows={10}
              cols={50}
              id="text-two"
              {...register("info", { required: true })}
            />
          </div>

          <div className={"addButton"}>
            <Button type="submit" disabled={!isValid}>
              {some ? "Edit" : "Add"}
            </Button>
          </div>
        </form>
      </section>
    </Wrapper>
  );
};

export default AddForm;
