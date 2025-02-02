import { useState } from 'react';
import logo from '../assets/logo.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <h1>
        <img src={logo} alt="Logo" width={150} />
      </h1>
      <nav>
        <ul className={`nav_links ${isOpen ? 'open' : ''}`}>
          <li>
            <a href="#">الصفحة الرئيسية</a>
          </li>
          <li>
            <a href="#">اتصل بنا</a>
          </li>
          <li>
            <a href="#">تسجيل الدخول</a>
          </li>
          <li>
            <a href="#">
              <button>التسجيل</button>
            </a>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </header>
  );
}
