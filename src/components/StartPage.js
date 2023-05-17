import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from './StartPage.module.css';

const StartPage = () => {
    const {user} = useSelector(state => state.auth);
    const {date} = useSelector(state => state.idTaker)
    return(
        <>
        <section className={classes.allPage}>
            <h1>Task App</h1>
            <div>
                <Link className={classes.startLink} to={user ? `${date}` : '/reg'}>Start</Link>
            </div>
        </section>
        </>
    )
}

export default StartPage;