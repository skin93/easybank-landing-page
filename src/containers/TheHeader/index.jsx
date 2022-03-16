import { useContext } from "react";

import { Button, Nav, Logo } from "../../components";
import { AppContext } from "../../context/AppContext";

import "./TheHeader.css";

const TheHeader = () => {
  const { toggle, dispatch } = useContext(AppContext);

  return (
    <header className="header section-padding">
      <Logo />
      <Nav toggle={toggle} />
      <Button />
      {toggle ? (
        <img
          src="src/assets/images/icon-close.svg"
          className="header__icon-close"
          alt="Close"
          onClick={() => dispatch({ type: "SET_TOGGLE" })}
        />
      ) : (
        <img
          src="src/assets/images/icon-hamburger.svg"
          className="header__icon-hamburger"
          alt="Hamburger"
          onClick={() => dispatch({ type: "SET_TOGGLE" })}
        />
      )}
    </header>
  );
};

export default TheHeader;
