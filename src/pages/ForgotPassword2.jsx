import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ChangePassword({ api }) {
  const [time, setTime] = useState(60);
  const [showTimer, setShowTimer] = useState(false);

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

  const [formData, setFormData] = useState({
    id: "",
    username: "",
    oldPassword: "",
    newPassword: "",
    retypePassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setShowTimer(true); // Hiển thị và bắt đầu đếm ngược khi nhấn nút "Gửi mã"
    setTime(60); // Đặt lại thời gian mỗi khi nhấn "Gửi mã"
  };

  return (
    <div>
      <Header />
      <div className="edit-profile">
        <div className="main-content">
          <div className="body">
            <h1 className="title">Quên mật khẩu</h1>
            <form onSubmit={handleSubmit}>
              <label>
                Mã xác thực:
                <input
                  className="Ma"
                  type="number"
                  name="oldPassword"
                  value={formData.oldPassword}
                  onChange={handleChange}
                />
                <button type="submit" className="btn">
                  Gửi mã
                </button>
              </label>

              <div className="action">
                <button className="btn-grad">
                  <Link className="cancel" to="../home">
                    Quay lại
                  </Link>
                </button>

                <button className="btn-grad">
                  <Link className="cancel" to="../change-password">
                    Xác nhận
                  </Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ChangePassword;
