import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/header.css';
import logo from '../assets/img/index-img/NHA_TRO_NGUYEN_KHANG-removebg-preview.png';

function Header() {
  const [isActive, setIsActive] = useState(false);

  // Hàm để toggle active state
  const toggleHamburger = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header fixed">
      <div className="main-content">
        <div className="body">
        {/* Logo */}
        <Link to="../home" onClick={() => {
            window.scrollTo(0, 0); // Kéo lên đầu trang
            setTimeout(() => {
                window.location.reload(); // Reload trang
            }, 0); // Reload sau khi kéo lên đầu trang
        }}>
            <img src={logo} alt="Nhà trọ giá rẻ Sài Gòn" className="logo" />
        </Link>



          {/* Nav */}
          <nav className={`nav ${isActive ? 'active' : ''}`}>
            <ul>
              <li>
                <Link to="../home" className="item" >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="../building-search" className="item">
                  Tìm trọ - nhà
                </Link>
              </li>
              <li>
                <Link to="../warehouse" className="item">
                  Thuê kho xưởng
                </Link>
              </li>

              <li>
                <Link to="../land" className="item">
                    Thuê đất
                </Link>
              </li>
            </ul>
          </nav>

          {/* Login */}
          <div className="action">
            {/* LoginPages */}
            <Link to="../login" className="btn sign-up-btn">
                  Đăng nhập
                </Link>
          </div>

          {/* Hamburger button */}
          <button className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleHamburger}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
