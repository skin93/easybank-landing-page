import "./Nav.css";

const Navbar = ({ toggle }) => {
  return (
    <nav className="nav">
      <ul className={toggle ? "nav__menu--mobile" : "nav__menu--desktop"}>
        <li className="nav__item">
          <a className="nav__link" href="/">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#">
            About
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#">
            Contact
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#">
            Blog
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#">
            Careers
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
