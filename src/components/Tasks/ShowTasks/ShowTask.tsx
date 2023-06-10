import React from "react";
import '../TasksStyles/Tasks.css';
import { Link } from "react-router-dom";
import { checkBox } from "../../../store/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import AnimatedPage from "../../../pages/Animated";


interface TypeOfInfo {
  info: Array<{ id: string; title: string; info: string }>;
}

const ShowTask: React.FC<TypeOfInfo> = (props) => {
  const { date } = useSelector((state:any) => state.taskSlice);
  const { isChecked } = useSelector((state:any) => state.taskSlice);
  const dispatch = useDispatch();
  return (
    <>
      <AnimatedPage>
        <section className={'sectionTask'}>
          <h1 >Your Task</h1>
          <ul className={'list'}>
            {props.info.map((doc) => (
              <li className={'listCheck'} key={doc.id}>
                <Link className={'href'} to={`/${date}/${doc.id}`}>
                  {doc.title}
                </Link>
                <input
                  className={'check'}
                  checked={isChecked.includes(doc.id)}
                  onChange={() => dispatch(checkBox(doc.id))}
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
