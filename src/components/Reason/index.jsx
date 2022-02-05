import "./Reason.css";

const Reason = ({ src, name, desc }) => {
  return (
    <div className="reason">
      <img src={src} alt={name} className="reason__icon" />
      <h3 className="reason__name">{name}</h3>
      <p className="reason__desc">{desc}</p>
    </div>
  );
};

export default Reason;
