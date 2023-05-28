import React, { useState } from "react";

import classes from "../HeaderNavigation/Navigation.module.css";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../providers/auth/auth";
import { useDispatch, useSelector } from "react-redux";

import { logout as logoutHandle } from "../../store/auth";
import Wrapper from "../../UI/Wrapper";
import Button from "../../UI/Button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    dispatch(logoutHandle());
    navigate("/login", {
      replace: true,
    });
  };

  const toogleHandle = () => {
    setIsOpen(!isOpen);
  };

  const { date } = useSelector((state) => state.taskSlice);
  return (
    <Wrapper>
      <header className={classes.header}>
        <div>
          <Link className={classes.logo} to="/0">
            Tassker
          </Link>
        </div>
        <nav className={classes.nav}>
          {user && (
            <ul className={classes.list}>
              {!user && (
                <li>
                  <Link to="reg" className={classes.txt}>
                    Auth
                  </Link>
                </li>
              )}

              <li>
                <Link to={`/${date}/add-task`} className={classes.txt}>
                  add task
                </Link>
              </li>

              <li>
                <Button onClick={handleLogout}>Log out</Button>
              </li>
            </ul>
          )}

          {user && (
            <Button onClick={toogleHandle} className={classes.butmenu}>
              menu
            </Button>
          )}
        </nav>

        {isOpen && (
          <div className={classes.menu}>
            {user && (
              <ul className={classes.listwo}>
                {!user && (
                  <li>
                    <Link to="reg" className={classes.txt}>
                      Auth
                    </Link>
                  </li>
                )}

                <li>
                  <Link to={`/${date}/add-task`} className={classes.txt}>
                    add task
                  </Link>
                </li>

                <li>
                  <Button className={classes.butlog} onClick={handleLogout}>
                    Log out
                  </Button>
                </li>
              </ul>
            )}
            <div className={classes.close} onClick={toogleHandle}>
              close
            </div>
          </div>
        )}
      </header>
    </Wrapper>
  );
};

export default Navigation;
