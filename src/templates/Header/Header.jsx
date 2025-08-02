import "./Header.css";

export default function Header({ title, text, backgroundImage }) {
  return (
    <header
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="header--pageHeader"
    >
      <h1 className="header--pageHeader__title">{title}</h1>
      <p className="header--pageHeader__text">{text}</p>
    </header>
  );
}
