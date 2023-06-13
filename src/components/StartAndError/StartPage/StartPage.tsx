import React from "react";
import { Link } from "react-router-dom";
import "../StylesForStartAndError/StylesForStartAndError.css";
import { useAppSelector } from "../../../store";

const StartPage: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { date } = useAppSelector((state) => state.taskSlice);
  return (
    <>
      <section className={"allPage"}>
        <h1>Task App</h1>
        <div>
          <Link className={"startLink"} to={user ? `${date}` : "/reg"}>
            Start
          </Link>
        </div>
      </section>
    </>
  );
};

export default StartPage;
