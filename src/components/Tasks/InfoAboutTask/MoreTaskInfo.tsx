import React from "react";
import "../../Tasks/TasksStyles/Tasks.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../UI/ButtonUI/Button";
import { TasksInfo } from "../../../reusles-types/reusles.types";
import { useAppSelector } from "../../../store";

interface MoreTaskType {
  inf: TasksInfo;
}
const MoreTaskInfo: React.FC<MoreTaskType> = ({ inf }) => {
  const navigate = useNavigate();

  const goBack = (): void => {
    navigate(`/${date}`, {
      replace: true,
    });
  };
  const { date } = useAppSelector((state) => state.taskSlice);
  return (
    <>
      <section className={"gapSect"}>
        <div>
          <button onClick={goBack} className={"back"}>
            go back
          </button>
        </div>
        <div className={"allInfo"}>
          <h1 className={"tt"}>{inf.title}</h1>
          <p className={"txt"}>{inf.info}</p>
        </div>

        <div className={"buttons"}>
          <Link className={"links"} to={`/${date}/add-task`}>
            <Button className={"butt"}>ADD</Button>
          </Link>
          <Link className={"links"} to="edit-task">
            <Button className={"butt"}>EDIT</Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default MoreTaskInfo;
