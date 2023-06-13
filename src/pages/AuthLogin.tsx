import React from "react";
import { useDispatch } from "react-redux";
import { login as loginHandler } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { login } from "../providers/auth/auth";
import RegForm from "../components/Form/AuthForm/AuthForm";

const AuthLoginPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = async (
    email: string,
    password: string | number
  ): Promise<void> => {
    if (typeof password !== "number") {
      const user = await login(email, password);
      if (user) {
        const payload = {
          email: user.email,
          uid: user.uid,
        };
        dispatch(loginHandler(payload));
      }
      navigate("/0", {
        replace: true,
      });
    }
  };
  return <RegForm onSubmitLogin={submitHandler} />;
};

export default AuthLoginPage;
