import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/header.css";
import logo from "../assets/img/index-img/NHA_TRO_NGUYEN_KHANG-removebg-preview.png";
import axios from "axios";
import { api } from "../script/common";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userRef = useRef(null);
  const navigator = useNavigate();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userRef.current && !userRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  // Di chuyển interceptor ra ngoài để áp dụng cho tất cả các yêu cầu axios
  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  function Logout() {
    if (!localStorage.getItem("token")) return;
    const Token = localStorage.getItem("token");

    const tokenRequest = { token: Token };
    axios
      .post(api + "/users/logout", tokenRequest, {
        headers: { Authorization: `Bearer ${Token}` },
      })
      .then((resp) => {
        localStorage.removeItem("token");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }

  const toggleHamburger = () => {
    setIsActive(!isActive);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Chuyển đổi giữa hiển thị và ẩn menu
  };

  //----------------------------------------------------------Chuyen trang--------------------------------------------------
  function navigateToLoginPage() {
    navigator("/login");
  }

  function navigateToHomePage() {
    navigator("/home");
  }

  function navigateToAdminPage() {
    navigator("/admin");
  }

  function navigateToBuildingSearchPage() {
    navigator("/building-search");
  }

  function navigateToWareHousePage() {
    navigator("/warehouse");
  }

  function navigateToLandPage() {
    navigator("/land");
  }
  //----------------------------------------------------------End Chuyen trang--------------------------------------------------

  return (
    <header className="header fixed">
      <div className="main-content">
        <div className="body">
          <Link
            to="../home"
            onClick={() => {
              window.scrollTo(0, 0); // Kéo lên đầu trang
              setTimeout(() => {
                window.location.reload(); // Reload trang
              }, 0); // Reload sau khi kéo lên đầu trang
            }}
          >
            <img src={logo} alt="Nhà trọ giá rẻ Sài Gòn" className="logo" />
          </Link>

          {/* Nav */}
          <nav className={`nav ${isActive ? "active" : ""}`}>
            <ul>
              <li>
                <button onClick={navigateToHomePage} className="item">
                  Trang chủ
                </button>
              </li>

              <li className="item">
                {isLoggedIn && (
                  <button onClick={navigateToAdminPage}>Trang quản trị</button>
                )}
              </li>

              <li>
                <button onClick={navigateToBuildingSearchPage} className="item">
                  Tìm trọ - nhà
                </button>
              </li>
              <li>
                <button onClick={navigateToWareHousePage} className="item">
                  Thuê kho xưởng
                </button>
              </li>
              <li>
                <button onClick={navigateToLandPage} className="item">
                  Thuê đất
                </button>
              </li>
            </ul>
          </nav>

          {/* Login */}
          <div className="action">
            {!isLoggedIn && (
              <div className="btn">
                <button className="sign-up-btn" onClick={navigateToLoginPage}>
                  Đăng nhập
                </button>
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
                      <button to="../home" className="user-link">
                        <i class="fa-solid fa-user"></i>
                        Trang quản trị
                      </button>
                    </li>
                    <li className="item">
                      <button to="../home" className="user-link">
                        <i className="fa-solid fa-user-pen"></i>
                        Chỉnh sửa thông tin cá nhân
                      </button>
                    </li>
                    <li className="item">
                      <button onClick={Logout} className="user-link">
                        <i className="fa-solid fa-right-from-bracket"></i>
                        Đăng xuất
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            )}
          </div>

          {/* Hamburger button */}
          <button
            className={`hamburger ${isActive ? "active" : ""}`}
            onClick={toggleHamburger}
          >
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
