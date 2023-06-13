import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../FormStyles/Form.css";
import Button from "../../../UI/ButtonUI/Button";
import Wrapper from "../../../UI/WrapperUI/Wrapper";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthData } from "../../../reusles-types/reusles.types";

interface AuthProps {
  onSubmitReg?: (email: string, password: string | number) => void;
  onSubmitLogin?: (email: string, password: string | number) => void;
}

const RegForm: React.FC<AuthProps> = (props) => {
  const location = useLocation();
  const page = location.pathname === "/reg";

  const { register, handleSubmit } = useForm<AuthData>();

  const onSubmitReg: SubmitHandler<AuthData> = (data) => {
    if (props.onSubmitReg !== undefined) {
      props.onSubmitReg(data.email, data.password);
    }
  };

  const onSubmitLogin: SubmitHandler<AuthData> = (data) => {
    if (props.onSubmitLogin !== undefined) {
      props.onSubmitLogin(data.email, data.password);
    }
  };

  return (
    <React.Fragment>
      <Wrapper>
        <section className={"sectionForm"}>
          <h1>{page ? "Regist" : "Login"}</h1>
          <form
            onSubmit={
              page ? handleSubmit(onSubmitReg) : handleSubmit(onSubmitLogin)
            }
            className={"form"}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                autoComplete="current-password"
                className="inputs"
                id="email"
                type="email"
                {...register("email")}
              />
            </div>
            <div>
              <label htmlFor="image">Password</label>
              <input
                autoComplete="current-password"
                className="inputs"
                id="password"
                type="password"
                {...register("password")}
              />
            </div>
            <div className={"buttons"}>
              <Link className={"signup"} to={page ? "/login" : "/reg"}>
                {page ? "Login in" : "Registr"}
              </Link>
              <Button type="submit">Send</Button>
            </div>
          </form>
        </section>
      </Wrapper>
    </React.Fragment>
  );
};

export default RegForm;
