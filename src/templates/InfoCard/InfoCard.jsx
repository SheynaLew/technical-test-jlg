import "./InfoCard.css";

export default function InfoCard({
  title,
  text,
  iconImage,
  iconBackgroundColor,
  iconBorderColor,
}) {
  const iconStyle = {
    backgroundColor: iconBackgroundColor,
    borderRadius: "50%",
    padding: "0.5rem",
    border: `2px solid ${iconBorderColor}`,
    width: "3rem",
    height: "3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <section className="infoCard--container">
      <div className="infoCard--iconContainer" style={iconStyle}>
        <img src={iconImage} alt={title} className="infoCard--icon" />
      </div>
      <div className="infoCard--textContainer">
        <h3 className="infoCard--title">{title}</h3>
        <p className="infoCard--text">{text}</p>
      </div>
    </section>
  );
}
