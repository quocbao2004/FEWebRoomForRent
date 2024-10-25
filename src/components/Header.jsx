import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/header.css';
import logo from '../assets/img/index-img/NHA_TRO_NGUYEN_KHANG-removebg-preview.png';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
        if (userRef.current && !userRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
        document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); 
  }, []);

  const toggleHamburger = () => {
    setIsActive(!isActive);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);  // Chuyển đổi giữa hiển thị và ẩn menu
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
                <Link to="../home" className="item">
                  Trang chủ
                </Link>
              </li>

            <li className="item">
              {isLoggedIn && (
                  <Link to="../admin">
                  Trang quản trị
                  </Link>
              )}
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
            {!isLoggedIn && (
              <div className="btn sign-up-btn">
                <Link to="../login">
                  Đăng nhập
                </Link>
              </div>
            )}
          </div>

          <div className="action">
            {isLoggedIn && (
              <div className="user" ref={userRef} onClick={toggleMenu}>
                <i className="fa-regular fa-user"></i>
                {isMenuOpen && (
                  <ul className="user_list">
                    <li className="item">
                      <Link to="../home" className='user-link'>
                        <i class="fa-solid fa-user"></i>
                        Trang quản trị
                      </Link>
                    </li>
                    <li className="item">
                      <Link to="../home" className='user-link'>
                        <i className="fa-solid fa-user-pen"></i>
                        Chỉnh sửa thông tin cá nhân
                      </Link>
                    </li>
                    <li className="item">
                      <Link to="../home" className='user-link'>
                        <i className="fa-solid fa-right-from-bracket"></i>
                        Đăng xuất
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            )}
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
