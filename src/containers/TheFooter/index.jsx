import "./TheFooter.css";
import { Button, Logo } from "/src/components";
import { facebook, youtube, twitter, pinterest, instagram } from "./imports";

const TheFooter = () => {
  return (
    <footer className="footer section-padding">
      <Logo color="white" />
      <div className="footer__social-medias">
        <img className="footer__social-media" src={facebook} alt="Facebook" />
        <img className="footer__social-media" src={youtube} alt="YouTube" />
        <img className="footer__social-media" src={twitter} alt="Twitter" />
        <img className="footer__social-media" src={pinterest} alt="Pinterest" />
        <img className="footer__social-media" src={instagram} alt="Instagram" />
      </div>
      <ul className="footer__links">
        <li className="footer__link">
          <a href="#"></a>About Us
        </li>
        <li className="footer__link">
          <a href="#"></a>Contact
        </li>
        <li className="footer__link">
          <a href="#"></a>Blog
        </li>
        <li className="footer__link">
          <a href="#"></a>Careers
        </li>
        <li className="footer__link">
          <a href="#"></a>Support
        </li>
        <li className="footer__link">
          <a href="#"></a>Privacy Policy
        </li>
      </ul>
      <Button />
      <p className="footer__copy"> © Easybank. All Rights Reserved</p>
    </footer>
  );
};

export default TheFooter;
