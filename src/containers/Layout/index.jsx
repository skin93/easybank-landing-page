import TheFooter from "../TheFooter";
import TheHeader from "../TheHeader";

import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <TheHeader />
      <main className="main">{children}</main>
      <TheFooter />
    </>
  );
};

export default Layout;
