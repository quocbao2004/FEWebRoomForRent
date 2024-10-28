import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import "../assets/css/listCustomer.css";
import DataTable from "../components/DataTable";

function ListCustomer({ api }) {
  const [customerData, setCustomerData] = useState([
    {
      id: 1,
      name: "Nguyễn Văn A",
      phone: "0123456789",
      email: "a@example.com",
      description: "Thuê trọ",
      status: "Chưa xử lý",
    },
    {
      id: 2,
      name: "Trần Thị B",
      phone: "0987654321",
      email: "b@example.com",
      description: "Đối tác mới",
    },
    {
      id: 3,
      name: "Lê Văn C",
      phone: "0123987456",
      email: "c@example.com",
      description: "Hợp tác",
    },
    {
      id: 4,
      name: "Đào Quốc Bảo",
      phone: "0865479500",
      email: "c@example.com",
      description: "Thuê nhà",
    },
  ]);

  // Hàm xử lý khi xóa tất cả
  const handleDeleteAll = () => {
    setCustomerData([]); // Xóa toàn bộ dữ liệu từ state
  };

  return (
    <div>
      <Header />
      <div className="list-customer">
        <div className="main-content">
          <div className="body">
            <h1>Danh sách khách hàng đã gửi thông tin</h1>
            <DataTable data={customerData} onDeleteAll={handleDeleteAll} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ListCustomer;
