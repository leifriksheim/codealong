import "./Header.css";

export default function Header({ left = null, right = null }) {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">{left}</div>
        <div className="header__right">{right}</div>
      </div>
    </header>
  );
}
