import phones from "/src/assets/images/image-mockups.png";
import "./Hero.css";
import { Button } from "../../components";

const Hero = () => {
  return (
    <section className="hero">
      <img className="hero__img-phones" src={phones} alt="bg-intro" />
      <div className="hero__img-background" />
      <div className="hero__content section-padding">
        <h1 className="hero__title">Next generation digital banking</h1>
        <p className="hero__info">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <Button />
      </div>
    </section>
  );
};

export default Hero;
