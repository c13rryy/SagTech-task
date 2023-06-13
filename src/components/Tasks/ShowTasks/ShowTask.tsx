import React from "react";
import "../TasksStyles/Tasks.css";
import { Link } from "react-router-dom";
import { checkBox } from "../../../store/taskSlice";
import AnimatedPage from "../../../pages/Animated";
import { useAppDispatch, useAppSelector } from "../../../store";

interface TaskInfo {
  id: string;
  title: string;
  info: string;
}

interface TypeOfInfo {
  info: Array<TaskInfo>;
}

const ShowTask: React.FC<TypeOfInfo> = (props) => {
  const { date } = useAppSelector((state) => state.taskSlice);
  const { isChecked } = useAppSelector((state) => state.taskSlice);
  const dispatch = useAppDispatch();
  return (
    <>
      <AnimatedPage>
        <section className={"sectionTask"}>
          <h1>Your Task</h1>
          <ul className={"list"}>
            {props.info.map((doc) => (
              <li className={"listCheck"} key={doc.id}>
                <Link className={"href"} to={`/${date}/${doc.id}`}>
                  {doc.title}
                </Link>
                <input
                  className={"check"}
                  checked={isChecked.includes(doc.id)}
                  onChange={(): void => {
                    dispatch(checkBox(doc.id));
                  }}
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

export default ShowTask;
