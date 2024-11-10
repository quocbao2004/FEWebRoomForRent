import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ChangePassword({ api }) {
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
  };

  return (
    <div>
      <Header />
      <div className="edit-profile">
        <div className="main-content">
          <div className="body">
            <h1 className="title">Đổi mật khẩu</h1>
            <form onSubmit={handleSubmit}>
              <label>
                Username
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </label>
              <label>
                Mật khẩu cũ
                <input
                  type="password"
                  name="oldPassword"
                  value={formData.oldPassword}
                  onChange={handleChange}
                />
              </label>
              <label>
                Mật khẩu mới
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                />
              </label>
              <label>
                Nhập lại mật khẩu mới
                <input
                  type="password"
                  name="retypePassword"
                  value={formData.retypePassword}
                  onChange={handleChange}
                />
              </label>

              <div className="action">
                <button type="submit" className="btn">
                  Lưu thay đổi
                </button>

                <button className="btn">
                  <Link className="cancel" to="../edit-profile">
                    Quay lại
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