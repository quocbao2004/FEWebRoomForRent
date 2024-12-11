import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { api } from "../script/common";
import axios from "axios";
import "../assets/css/forgotPassword.css"; // CSS cho hiệu ứng

function ForgotPassword() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1); // Bước hiện tại
  const [username, setUsername] = useState("");
  const [otp, setOtp] = useState("");
  const [formData, setFormData] = useState({
    newPassword: "",
    retypePassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [time, setTime] = useState(60);
  const [showTimer, setShowTimer] = useState(false);

  // Bắt đầu bộ đếm thời gian OTP
  useEffect(() => {
    if (showTimer && time > 0) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [time, showTimer]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  // Xử lý khi nhập username
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setErrorMessage("");
  };

  // Xử lý khi nhập mật khẩu
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Gửi yêu cầu kiểm tra username
  const handleCheckUsername = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setErrorMessage("Vui lòng nhập username trước khi tiếp tục.");
      return;
    }

    axios
      .get(api + "/check-username", { params: { username } })
      .then((response) => {
        localStorage.setItem("email", response.data.email); // Lưu email vào localStorage
        setCurrentStep(2); // Chuyển sang bước 2
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("Có lỗi xảy ra hoặc username không tồn tại.");
      });
  };

  // Gửi mã OTP
  const sendOTPHandler = () => {
    const email = localStorage.getItem("email");
    if (!email) {
      alert("Không tìm thấy email.");
      return;
    }

    axios
      .post(api + "/password-reset/send-otp?email=" + email)
      .then(() => {
        setShowTimer(true);
        setTime(60); // Đặt lại bộ đếm thời gian
      })
      .catch((err) => {
        console.log(err);
        alert("Có lỗi xảy ra khi gửi OTP.");
      });
  };

  // Xác thực OTP
  const validateOTPHandler = () => {
    const email = localStorage.getItem("email");
    if (!otp.trim()) {
      alert("Vui lòng nhập OTP.");
      return;
    }

    axios
      .post(api + "/password-reset/validate-otp?email=" + email + "&otp=" + otp)
      .then(() => {
        localStorage.setItem("otp", otp); // Lưu OTP vào localStorage
        setCurrentStep(3); // Chuyển sang bước 3
      })
      .catch((err) => {
        console.log(err);
        alert("OTP không đúng hoặc đã hết hạn.");
      });
  };

  // Đổi mật khẩu
  const handleChangePassword = (e) => {
    e.preventDefault();
    const email = localStorage.getItem("email");

    if (formData.newPassword !== formData.retypePassword) {
      alert("Mật khẩu mới và nhập lại không khớp.");
      return;
    }

    axios
      .post(api + "/password-reset/reset-password?email=" + email, {
        newPassword: formData.newPassword,
      })
      .then(() => {
        alert("Đổi mật khẩu thành công.");
        navigate("/login"); // Điều hướng về trang login
      })
      .catch((err) => {
        console.log(err);
        alert("Có lỗi xảy ra khi đổi mật khẩu.");
      });
  };

  // Render từng bước
  const renderStep1 = () => (
    <form onSubmit={handleCheckUsername}>
      <label>
        Username
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </label>
      {errorMessage && (
        <p style={{ color: "red", marginTop: "5px" }}>{errorMessage}</p>
      )}
      <button type="submit" className="btn-grad">
        Tiếp tục
      </button>
    </form>
  );

  const renderStep2 = () => (
    <div>
      <label>
        Mã xác thực:
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      </label>
      <button className="btn-grad" onClick={sendOTPHandler}>
        Gửi mã
      </button>
      {showTimer && (
        <div>
          {time > 0
            ? `${minutes < 10 ? "0" : ""}${minutes}:${
                seconds < 10 ? "0" : ""
              }${seconds}`
            : "OTP hết hạn. Vui lòng gửi lại mã."}
        </div>
      )}
      <button className="btn-grad" onClick={validateOTPHandler}>
        Xác nhận
      </button>
    </div>
  );

  const renderStep3 = () => (
    <form onSubmit={handleChangePassword}>
      <label>
        Mật khẩu mới
        <input
          type="password"
          name="newPassword"
          value={formData.newPassword}
          onChange={handlePasswordChange}
        />
      </label>
      <label>
        Nhập lại mật khẩu mới
        <input
          type="password"
          name="retypePassword"
          value={formData.retypePassword}
          onChange={handlePasswordChange}
        />
      </label>
      <button type="submit" className="btn-grad">
        Lưu thay đổi
      </button>
    </form>
  );

  return (
    <div>
      <Header />
      <div className="forgot-password">
        <div className="container">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ForgotPassword;
