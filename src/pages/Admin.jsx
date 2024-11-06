import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/admin.css";

function Admin({}) {
  return (
    <div>
      <Header />
      <div className="admin">
        <div className="body-admin">
          <div className="dashboard">
            <h1 className="title">Trang quản trị</h1>
            <Link className="item body-admin-item" to="/customer">
              <i class="fa-solid fa-users"></i>
              Xem danh sách khách hàng
            </Link>
            <Link className="item body-admin-item" to="/create-building">
              <i class="fa-solid fa-building"></i>
              Thêm bất động sản
            </Link>
            <Link to="../edit-profile" className="item body-admin-item">
              <i className="fa-solid fa-user-pen"></i>
              Chỉnh sửa thông tin cá nhân
            </Link>
            <Link className="item body-admin-item" to="../change-password">
              <i class="fa-solid fa-lock"></i>
              Đổi mật khẩu
            </Link>
            <div className="item body-admin-item">
              <i class="fa-solid fa-calculator"></i>
              Máy tính
            </div>
          </div>

          <div className="news"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Admin;
