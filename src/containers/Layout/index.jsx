import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import TheFooter from "../TheFooter";
import TheHeader from "../TheHeader";

import "./Layout.css";

const Layout = ({ children }) => {
  const { toggle } = useContext(AppContext);

  return (
    <>
      <TheHeader />

      <main className="main">
        <div className="overlay" hidden={!toggle} />
        {children}
      </main>
      <TheFooter />
    </>
  );
};

export default Layout;
