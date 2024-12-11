import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const userRole = localStorage.getItem("role"); // Lấy vai trò từ localStorage
  const token = localStorage.getItem("token"); // Kiểm tra người dùng đã đăng nhập chưa

  // Kiểm tra đăng nhập và quyền
  if (!token) {
    return <Navigate to="/login" replace />; // Chuyển hướng tới trang đăng nhập
  }

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />; // Chuyển hướng tới trang "không có quyền"
  }

  return children; // Nếu hợp lệ, hiển thị nội dung con
};

export default ProtectedRoute;
