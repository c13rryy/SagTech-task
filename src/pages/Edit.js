import React from "react";
import AddForm from "../components/Form/AddAndEditTask/AddForm";
import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

const Edit = () => {
  const { information } = useSelector((state) => state.information);
  const { id } = useParams();

  const taskInfo = information.find((task) => task.id === id);
  return <>{taskInfo && <AddForm some={taskInfo} />}</>;
};

export default Edit;
