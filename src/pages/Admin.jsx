import React from "react";
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
            <div className="item">Xem danh sách khách hàng</div>
            <div className="item">Thêm bất động sản</div>
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
