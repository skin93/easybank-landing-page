import "./Reasons.css";
import { reasons } from "./imports.js";
import { Reason } from "../../components";

const Reasons = () => {
  return (
    <section className="reasons section-padding">
      <h1 className="reasons__title">Why choose Easybank?</h1>
      <p className="reasons__info">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>
      <div className="reasons__list">
        {reasons.map((reason) => (
          <Reason
            key={reason.name}
            name={reason.name}
            desc={reason.desc}
            src={reason.src}
          />
        ))}
      </div>
    </section>
  );
};

export default Reasons;
