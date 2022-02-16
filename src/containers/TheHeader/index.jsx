import { useState } from "react";

import { Button, Nav, Logo } from "../../components";

import "./TheHeader.css";

const TheHeader = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  return (
    <header className="header section-padding">
      <Logo />
      <Nav toggle={toggle} />
      <Button />
      {toggle ? (
        <img
          src="src/assets/images/icon-close.svg"
          className="header__icon-close"
          alt="Hamburger"
          onClick={() => setToggle(!toggle)}
        />
      ) : (
        <img
          src="src/assets/images/icon-hamburger.svg"
          className="header__icon-hamburger"
          alt="Hamburger"
          onClick={() => setToggle(!toggle)}
        />
      )}
    </header>
  );
};

export default TheHeader;
