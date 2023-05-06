
import { useDispatch } from 'react-redux';
import { login as loginHandler } from "../store/auth";
import {  useNavigate } from "react-router-dom";
import { register } from '../firebase';

import React from "react";
import RegForm from "../components/RegForm";


const AuthRegPage = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const submitHandler = async(email, password) => {
      const user = await register(email, password);
      console.log(user);
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
   return <RegForm  onSubmitReg={submitHandler} />
};

export default AuthRegPage;