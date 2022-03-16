import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

import hamburger from "/src/assets/images/icon-hamburger.svg";
import close from "/src/assets/images/icon-close.svg";
import { Button, Nav, Logo } from "../../components";

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
          src={close}
          className="header__icon-close"
          alt="Close"
          onClick={() => dispatch({ type: "SET_TOGGLE" })}
        />
      ) : (
        <img
          src={hamburger}
          className="header__icon-hamburger"
          alt="Hamburger"
          onClick={() => dispatch({ type: "SET_TOGGLE" })}
        />
      )}
    </header>
  );
};

export default TheHeader;
