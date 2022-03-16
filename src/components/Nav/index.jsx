import "./Nav.css";

const Navbar = ({ toggle }) => {
  return (
    <nav className="nav">
      <ul className="nav__menu" aria-expanded={toggle}>
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
