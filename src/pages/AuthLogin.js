import React from "react";
import { useDispatch } from "react-redux";
import { login as loginHandler } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { login } from "../providers/auth/auth";
import RegForm from "../components/Form/AuthForm/RegForm";

const AuthLoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = async (email, password) => {
    const user = await login(email, password);
    if (user) {
      dispatch(
        loginHandler({
          email: user.email,
          uid: user.uid,
          token: user.accessToken,
        })
      );

      navigate("/0", {
        replace: true,
      });
    }
  };
  return <RegForm onSubmitLogin={submitHandler} />;
};

export default AuthLoginPage;
