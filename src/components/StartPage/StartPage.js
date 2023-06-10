import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../StylesForStartAndError/StylesForStartAndError.css';

const StartPage = () => {
    const {user} = useSelector(state => state.auth);
    const {date} = useSelector(state => state.taskSlice)
    return(
        <>
        <section className={'allPage'}>
            <h1>Task App</h1>
            <div>
                <Link className={'startLink'} to={user ? `${date}` : '/reg'}>Start</Link>
            </div>
        </section>
        </>
    )
}

export default StartPage;