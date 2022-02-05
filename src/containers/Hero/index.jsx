import "./Hero.css";
import { Button } from "../../components";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__img-wrapper">
        <img
          className="hero__img"
          src="/src/assets/images/image-mockups.png"
          alt="bg-intro"
        />
      </div>
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
