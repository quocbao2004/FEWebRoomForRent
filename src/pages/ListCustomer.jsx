import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/listCustomer.css";
import DataTable from "../components/DataTable";
import { useNavigate } from "react-router-dom";
import { api } from "../script/common";
import axios from "axios";

function ListCustomer() {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "ADMIN") {
      navigate("/unauthorized"); // Chuyển hướng nếu không phải ADMIN
    }
  }, [navigate]);

  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      },
      (error) => Promise.reject(error)
    );

    axios
      .get(`${api}/customer`)
      .then((response) => {
        setCustomerData(response.data);
      })
      .catch((err) => {
        alert("Lỗi khi tải danh sách khách hàng: " + err.message);
      });
  }, []);

  function handleDeleteCustomer(customerId) {
    if (window.confirm("Bạn có chắc chắn muốn xóa khách hàng này không?")) {
      axios
        .delete(`${api}/customer/delete-customer/${customerId}`)
        .then(() => {
          alert("Xóa khách hàng thành công!");
          setCustomerData((prevData) =>
            prevData.filter((customer) => customer.id !== customerId)
          );
        })
        .catch((err) => {
          alert("Đã xảy ra lỗi khi xóa khách hàng: " + err.message);
        });
    }
  }

  return (
    <div>
      <Header />
      <div className="list-customer">
        <div className="main-content">
          <div className="body">
            <h1>Danh sách khách hàng</h1>
            <DataTable data={customerData} onDelete={handleDeleteCustomer} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ListCustomer;
