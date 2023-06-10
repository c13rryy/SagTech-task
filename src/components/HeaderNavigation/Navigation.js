import React, { useState } from "react";

import './NavigationStyles/Navigation.css';
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../providers/auth/auth";
import { useDispatch, useSelector } from "react-redux";

import { logout as logoutHandle } from "../../store/auth";
import Wrapper from "../../UI/WrapperUI/Wrapper";
import Button from "../../UI/ButtonUI/Button";

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
      <header className={'header'}>
        <div>
          <Link className={'logo'} to="/0">
            Tassker
          </Link>
        </div>
        <nav className={'nav'}>
          {user && (
            <ul className={'list'}>
              {!user && (
                <li>
                  <Link to="reg" className={'txt'}>
                    Auth
                  </Link>
                </li>
              )}

              <li>
                <Link to={`/${date}/add-task`} className={'txt'}>
                  add task
                </Link>
              </li>

              <li>
                <Button onClick={handleLogout}>Log out</Button>
              </li>
            </ul>
          )}

          {user && (
            <Button onClick={toogleHandle} className={'butmenu'}>
              menu
            </Button>
          )}
        </nav>

        {isOpen && (
          <div className={'menu'}>
            {user && (
              <ul className={'listwo'}>
                {!user && (
                  <li>
                    <Link to="reg" className={'txt'}>
                      Auth
                    </Link>
                  </li>
                )}

                <li>
                  <Link to={`/${date}/add-task`} className={'txt'}>
                    add task
                  </Link>
                </li>

                <li>
                  <Button className={'butlog'} onClick={handleLogout}>
                    Log out
                  </Button>
                </li>
              </ul>
            )}
            <div className={'close'} onClick={toogleHandle}>
              close
            </div>
          </div>
        )}
      </header>
    </Wrapper>
  );
};

export default Navigation;
