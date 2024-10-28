import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Admin({}) {
  return (
    <div>
      <Header />
      <div className="admin">
        <div className="main-content">
          <h1 className="title">Trang quản trị</h1>
          <div className="body-admin">
            <div className="item">
              <Link to="../customer">Xem danh sách khách hàng</Link>
            </div>
            <div className="item">
              <Link to="../create-building">Thêm bất động sản</Link>
            </div>
            <div className="item">Sửa thông tin cá nhân</div>
            <div className="item">Đổi mật khẩu</div>
            <div className="item">Máy tính</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Admin;
