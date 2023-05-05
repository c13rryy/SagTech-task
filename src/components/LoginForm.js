import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { login as loginHandler } from "../store/auth";
import {  useNavigate } from "react-router-dom";
import { login } from "../firebase";


const LoginForm = () => {
    /* const location = useLocation();
    const page = location.pathname === '/reg'; */
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await login(email, password);
         if(user){
          dispatch(loginHandler({
            email: user.email,
            uid: user.uid,
            token: user.accessToken,
          }));
  
          navigate('/', {
            replace: true,
          })
         }
    }
  
    

  return (
    <React.Fragment>
      <section className={classes.sectionForm}>
        <h1>log</h1>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div>
          <label htmlFor="email">Email</label>
          <input  value={email} id="email" type="email" name="email" onChange={e => setEmail(e.target.value)}  />
        </div>
        <div>
          <label htmlFor="image">Password</label>
          <input value={password} id="password" type="password" name="password" onChange={e => setPassword(e.target.value)}  />
        </div>
        <div className={classes.buttons}>
            <Link className={classes.signup} to='/reg'>Reg</Link>
            <button>Send</button>
        </div>
      </form>
      </section>
      
    </React.Fragment>
  );
};


export default LoginForm;
