import { useDispatch } from "react-redux";
import { login as loginHandler } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { register } from "../providers/auth/auth";
import React from "react";
import RegForm from "../components/Form/AuthForm/AuthForm";

const AuthRegPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = async (
    email: string,
    password: string | number
  ): Promise<void> => {
    if (typeof password !== "number") {
      const user = await register(email, password);
      if (user) {
        dispatch(
          loginHandler({
            email: user.email,
            uid: user.uid,
          })
        );
      }
      navigate("/0", {
        replace: true,
      });
    }
  };
  return <RegForm onSubmitReg={submitHandler} />;
};

export default AuthRegPage;
