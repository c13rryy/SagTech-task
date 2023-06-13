import React from "react";
import AddForm from "../components/Form/AddAndEditTask/ManipulationsWithTask";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../store";

const Edit: React.FC = () => {
  const { information } = useAppSelector((state) => state.information);
  const { id } = useParams();

  const taskInfo = information.find((task) => task.id === id);

  return <>{taskInfo && <AddForm some={taskInfo} />}</>;
};

export default Edit;
