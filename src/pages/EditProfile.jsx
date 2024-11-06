import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/editProfile.css";

function EditProfile({ api }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
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
            <h1 className="title">Chỉnh sửa thông tin cá nhân</h1>
            <form onSubmit={handleSubmit}>
              <label>
                Tên đầy đủ:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
              <label>
                Email:
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              <label>
                Địa chỉ:
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </label>
              <label>
                Số điện thoại:
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </label>

              <div className="action">
                <button type="submit" className="btn-grad">
                  Lưu thay đổi
                </button>

                <button className="btn-grad">
                  <Link className="cancel" to="../change-password">
                    Đổi mật khẩu
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

export default EditProfile;
