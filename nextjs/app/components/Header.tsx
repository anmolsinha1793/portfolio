import Image from "next/image";
import { useScrollHeader, playClickSound } from "@/lib/main";

export default function Header() {
  useScrollHeader();
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">Anmol</a>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active__link">
                <i className="bx bx-home-alt"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="bx bx-user"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="bx bx-book"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#work" className="nav__link">
                <i className="bx bx-briefcase-alt-2"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="bx bx-message-square-detail"></i>
              </a>
            </li>
          </ul>
        </div>
        <i
          className="bx bx-moon change__theme"
          id="theme__button"
          onClick={playClickSound}
        ></i>
      </nav>
    </header>
  );
}
