import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/editProfile.css";
import { api } from "../script/common";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Thiết lập Axios Interceptor để tự động thêm token vào header Authorization
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Lấy token từ localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

function EditProfile() {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "ADMIN") {
      navigate("/unauthorized"); // Chuyển hướng nếu không phải ADMIN
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    address: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  // Lấy dữ liệu người dùng từ server
  useEffect(() => {
    axios
      .get(api + "/users/get-user?id=2") // ID người dùng giả định
      .then((response) => {
        setFormData(response.data); // Đổ dữ liệu vào form
      })
      .catch((err) => {
        console.error("Lỗi khi lấy thông tin người dùng:", err);
      });
  }, []);

  // Cập nhật state khi người dùng nhập thông tin
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Hàm xử lý khi nhấn nút Lưu thay đổi
  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn form reload trang
    setLoading(true); // Bật trạng thái loading

    axios
      .post(api + "/users/edit-user", formData) // Gửi dữ liệu cập nhật
      .then((response) => {
        const newToken = response.data.token; // Lấy token mới từ phản hồi

        // LƯU TOKEN VÀO LOCALSTORAGE
        if (newToken) {
          localStorage.setItem("token", newToken); // Lưu token vào localStorage
          alert("Cập nhật thông tin thành công và token đã được làm mới!");
        }

        // Làm mới thông tin từ server
        axios.get(api + "/users/get-user?id=2").then((response) => {
          setFormData(response.data); // Cập nhật lại form với dữ liệu mới
        });

        setLoading(false); // Tắt trạng thái loading
      })
      .catch((err) => {
        console.error("Lỗi khi cập nhật thông tin:", err);
        alert("Có lỗi xảy ra khi cập nhật thông tin. Vui lòng thử lại.");
        setLoading(false); // Tắt trạng thái loading
      });
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
                  name="fullname"
                  value={formData.fullname}
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
                <button type="submit" className="btn-submit" disabled={loading}>
                  {loading ? "Đang xử lý..." : "Lưu thay đổi"}
                </button>
                <button className="btn-submit">
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
