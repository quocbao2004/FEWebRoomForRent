import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/unauthorized.css"; // Đường dẫn tới file CSS

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="unauthorized-container">
      <div className="icon">🚫</div>
      <h1>Bạn không có quyền truy cập vào trang này</h1>
      <button onClick={() => navigate("/")}>Quay lại Trang Chủ</button>
    </div>
  );
};

export default UnauthorizedPage;
