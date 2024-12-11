import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import "../assets/css/admin.css";
import { api } from "../script/common";

function Admin() {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [managedBuildingsCount, setManagedBuildingsCount] = useState(0);
  const [loading, setLoading] = useState({ customers: true, buildings: true });
  const [error, setError] = useState("");

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (!role || role.toUpperCase() !== "ADMIN") {
      navigate("/unauthorized");
      return;
    }

    // Fetch customers
    axios
      .get(`${api}/customers`)
      .then((response) => {
        setCustomers(response.data);
        setTotalCustomers(response.data.length);
        setLoading((prev) => ({ ...prev, customers: false }));
      })
      .catch((err) => {
        console.error("Error fetching customer data:", err);
        setError("Không thể lấy danh sách khách hàng.");
        setLoading((prev) => ({ ...prev, customers: false }));
      });

    // Fetch managed buildings count
    axios
      .get(`${api}/building/count`)
      .then((response) => {
        setManagedBuildingsCount(response.data);
        setLoading((prev) => ({ ...prev, buildings: false }));
      })
      .catch((err) => {
        console.error("Error fetching building data:", err);
        setError("Không thể lấy số lượng bất động sản.");
        setLoading((prev) => ({ ...prev, buildings: false }));
      });

    // Fetch total customer count
    axios
      .get(`${api}/customer/count`)
      .then((response) => {
        setTotalCustomers(response.data); // Correct state update
        setLoading((prev) => ({ ...prev, customers: false }));
      })
      .catch((err) => {
        console.error("Error fetching customer count:", err);
        setError("Không thể lấy số lượng khách hàng.");
        setLoading((prev) => ({ ...prev, customers: false }));
      });
  }, [navigate]);

  return (
    <div>
      <Header />
      <div className="admin">
        <div className="body-admin">
          <div className="dashboard">
            <h1 className="title">Trang quản trị</h1>
            <button
              className="body-admin-item"
              onClick={() => navigate("/customer")}
            >
              <i className="fa-solid fa-users"></i>Xem danh sách khách hàng
            </button>
            <button
              className="body-admin-item"
              onClick={() => navigate("/create-building")}
            >
              <i className="fa-solid fa-building"></i>Thêm bất động sản
            </button>
            <button
              className="body-admin-item"
              onClick={() => navigate("/edit-profile")}
            >
              <i className="fa-solid fa-user-pen"></i>Chỉnh sửa thông tin cá
              nhân
            </button>
            <button
              className="body-admin-item"
              onClick={() => navigate("/change-password")}
            >
              <i className="fa-solid fa-lock"></i>Đổi mật khẩu
            </button>
          </div>

          {/* Statistics Section */}
          <div className="statistics-section">
            <div className="stat-card">
              <h2>Tổng số khách hàng</h2>
              {loading.customers ? (
                <p>Đang tải...</p>
              ) : (
                <p className="stat-number">{totalCustomers}</p>
              )}
            </div>
            <div className="stat-card">
              <h2>Bất động sản đang quản lý</h2>
              {loading.buildings ? (
                <p>Đang tải...</p>
              ) : (
                <p className="stat-number">{managedBuildingsCount}</p>
              )}
            </div>
            <div className="stat-card">
              <h2>Doanh thu tháng này</h2>
              <p className="stat-number">120 triệu VNĐ</p>
            </div>
          </div>

          {/* Customers Table */}
          <div className="customer-table">
            <h2>Danh sách khách hàng</h2>
            {loading.customers ? (
              <p>Đang tải dữ liệu...</p>
            ) : error ? (
              <p className="error">{error}</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Số điện thoại</th>
                    <th>Email</th>
                    <th>Mô tả</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer, index) => (
                    <tr key={index}>
                      <td>{customer.id}</td>
                      <td>{customer.name}</td>
                      <td>{customer.phone}</td>
                      <td>{customer.email}</td>
                      <td>{customer.description}</td>
                      <td>
                        <button className="delete-btn">
                          <i className="fa-solid fa-trash"></i>
                        </button>
                        <a
                          href={`https://zalo.me/${customer.phone}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/906/906377.png"
                            alt="Zalo"
                            className="zalo-icon"
                          />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Admin;
