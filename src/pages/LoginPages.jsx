import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../assets/css/loginPages.css";
import logo from "../assets/img/index-img/NHA_TRO_NGUYEN_KHANG-removebg-preview.png";
import { api } from "../script/common";

function LoginPages() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    phone: "",
    password: "",
  });

  // Xử lý khi nhấn Login
  function loginBtnHandler(e) {
    e.preventDefault(); // Ngăn hành vi mặc định của form
    const userLogin = {
      phone: userData.phone,
      password: userData.password,
    };

    axios
      .post(api + "/users/login", userLogin)
      .then(function (resp) {
        // Assume API response contains `role` directly
        const role = resp.data.role || "ADMIN"; // Fallback to "USER" if no role provided
        localStorage.setItem("role", role);
        localStorage.setItem("token", resp.data);
        // Điều hướng dựa trên role
        if (role === "ADMIN") {
          navigate("/home");
        } else {
          navigate("/unauthorized");
        }
      })
      .catch(function (err) {
        console.error(err);
        alert("Đăng nhập thất bại!");
      });
  }

  // Cập nhật dữ liệu khi người dùng nhập
  function handleChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  return (
    <>
      <div className="login">
        <div className="body">
          <div className="back">
            <button onClick={() => navigate("/home")}>
              <img src={logo} alt="Nhà trọ giá rẻ Sài Gòn" className="logo" />
            </button>

            <button onClick={() => navigate("/home")} className="backToHome">
              Trang chủ
            </button>
          </div>
          <div className="wrapper">
            {/* Thẻ form bao bọc toàn bộ input và nút */}
            <form onSubmit={loginBtnHandler}>
              <h1>Login</h1>
              <div className="input-box">
                <input
                  type="text"
                  name="phone"
                  placeholder="Username"
                  required
                  onChange={handleChange}
                />
                <i className="bx bxs-user"></i>
              </div>
              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={handleChange}
                />
                <i className="bx bxs-lock-alt"></i>
              </div>
              <div className="remember-forgot">
                <button
                  type="button"
                  onClick={() => navigate("/forgot-password")}
                >
                  Forgot Password
                </button>
              </div>
              {/* Nút Login có type="submit" */}
              <button type="submit" className="btn">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPages;
