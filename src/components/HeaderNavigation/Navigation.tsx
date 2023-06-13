import React, { useState } from "react";

import "./NavigationStyles/Navigation.css";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../providers/auth/auth";
import { logout as logoutHandle } from "../../store/auth";
import Wrapper from "../../UI/WrapperUI/Wrapper";
import Button from "../../UI/ButtonUI/Button";
import { useAppDispatch, useAppSelector } from "../../store";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = async (): Promise<void> => {
    await logout();
    dispatch(logoutHandle());
    navigate("/login", {
      replace: true,
    });
  };

  const toogleHandle = (): void => {
    setIsOpen(!isOpen);
  };

  const { date } = useAppSelector((state) => state.taskSlice);
  return (
    <Wrapper>
      <header className={"header"}>
        <div>
          <Link className={"logo"} to="/0">
            Tassker
          </Link>
        </div>
        <nav className={"nav"}>
          {user && (
            <ul className={"list"}>
              {!user && (
                <li>
                  <Link to="reg" className={"txt"}>
                    Auth
                  </Link>
                </li>
              )}

              <li>
                <Link to={`/${date}/add-task`} className={"txt"}>
                  add task
                </Link>
              </li>

              <li>
                <Button onClick={handleLogout}>Log out</Button>
              </li>
            </ul>
          )}

          {user && (
            <Button onClick={toogleHandle} className={"butmenu"}>
              menu
            </Button>
          )}
        </nav>

        {isOpen && (
          <div className={"menu"}>
            {user && (
              <ul className={"listwo"}>
                {!user && (
                  <li>
                    <Link to="reg" className={"txt"}>
                      Auth
                    </Link>
                  </li>
                )}

                <li>
                  <Link to={`/${date}/add-task`} className={"txt"}>
                    add task
                  </Link>
                </li>

                <li>
                  <Button className={"butlog"} onClick={handleLogout}>
                    Log out
                  </Button>
                </li>
              </ul>
            )}
            <div className={"close"} onClick={toogleHandle}>
              close
            </div>
          </div>
        )}
      </header>
    </Wrapper>
  );
};

export default Navigation;
