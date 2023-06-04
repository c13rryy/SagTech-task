import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./LoginForm.module.css";
import PropTypes from "prop-types";
import Button from "../../../UI/Button";
import Wrapper from "../../../UI/Wrapper";
import Input from "../../../UI/Input";

// TODO: mismatch названий
const RegForm = (props) => {
  const location = useLocation();
  const page = location.pathname === "/reg";

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmitReg = async (e) => {
    e.preventDefault();

    props.onSubmitReg(email, password);
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    props.onSubmitLogin(email, password);
  };

  return (
    <React.Fragment>
      <Wrapper>
        <section className={classes.sectionForm}>
          <h1>{page ? "Regist" : "Login"}</h1>
          <form
            onSubmit={page ? handleSubmitReg : handleSubmitLogin}
            className={classes.form}
          >
            <div>
              <label htmlFor="email">Email</label>
              <Input
                value={email}
                id="email"
                type="email"
                name="email"
                autoComplete="current-password"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="image">Password</label>
              <Input
                value={password}
                id="password"
                type="password"
                name="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={classes.buttons}>
              <Link className={classes.signup} to={page ? "/login" : "/reg"}>
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

RegForm.propTypes = {
  onSubmitReg: PropTypes.func.isRequired,
  onSubmitLogin: PropTypes.func.isRequired,
};

RegForm.defaultProps = {
  onSubmitReg: () => {},
  onSubmitLogin: () => {},
};

export default RegForm;
