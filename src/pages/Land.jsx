import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/css/land.css";
import { api } from "../script/common";

const Land = () => {
  const [originalRecords, setOriginalRecords] = useState([]); // Dữ liệu gốc từ API
  const [records, setRecords] = useState([]); // Dữ liệu sau khi áp dụng bộ lọc
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [pageSize] = useState(6); // Số mục trên mỗi trang
  const [showFilters, setShowFilters] = useState(false); // Hiển thị hoặc ẩn bộ lọc
  const [filters, setFilters] = useState({
    name: "",
    district: "",
    floorAreaFrom: "",
    floorAreaTo: "",
  }); // Trạng thái lưu bộ lọc

  const navigate = useNavigate();

  // Danh sách quận/huyện
  const districts = [
    "Quận 1",
    "Quận 3",
    "Quận 4",
    "Quận 5",
    "Quận 6",
    "Quận 7",
    "Quận 8",
    "Quận 10",
    "Quận 11",
    "Quận 12",
    "Quận Bình Thạnh",
    "Quận Tân Bình",
    "Quận Tân Phú",
    "Quận Phú Nhuận",
    "Huyện Bình Chánh",
    "Thành Phố Thủ Đức",
    "Quận Bình Tân",
    "Quận Gò Vấp",
    "Huyện Cần Giờ",
    "Huyện Củ Chi",
    "Huyện Hóc Môn",
    "Huyện Nhà Bè",
  ];

  // Điều hướng tới trang chi tiết đất
  const navigateToBuildingDetailPage = (id) => {
    navigate("/detail", { state: { id } });
  };

  // Lấy dữ liệu từ API khi tải trang
  useEffect(() => {
    fetchLandRecords();
  }, []);

  const fetchLandRecords = async () => {
    try {
      const response = await axios.get(`${api}/building?type=DAT`);
      setOriginalRecords(response.data); // Lưu dữ liệu gốc
      setRecords(response.data); // Hiển thị dữ liệu ban đầu
    } catch (error) {
      console.error("Error fetching land data:", error);
    }
  };

  // Áp dụng bộ lọc
  const applyFilters = () => {
    const { name, district, floorAreaFrom, floorAreaTo } = filters;
    const filtered = originalRecords.filter((land) => {
      const matchesName = name
        ? land.name.toLowerCase().includes(name.toLowerCase())
        : true;
      const matchesDistrict = district
        ? land.district.toLowerCase().includes(district.toLowerCase())
        : true;
      const matchesFloorAreaFrom = floorAreaFrom
        ? land.floorArea >= parseFloat(floorAreaFrom)
        : true;
      const matchesFloorAreaTo = floorAreaTo
        ? land.floorArea <= parseFloat(floorAreaTo)
        : true;

      return (
        matchesName &&
        matchesDistrict &&
        matchesFloorAreaFrom &&
        matchesFloorAreaTo
      );
    });

    setRecords(filtered);
    setCurrentPage(1); // Reset trang về trang đầu tiên
  };

  // Xử lý thay đổi giá trị trong bộ lọc
  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  // Tính toán phân trang
  const totalPages = Math.ceil(records.length / pageSize);
  const currentRecords = records.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="search-building-page">
      <Header />
      {/* Nút Liên hệ cố định */}
      <div className="contact-fixed">
        <a
          href="https://zalo.me/0909437393"
          target="_blank"
          rel="noopener noreferrer"
          className="message"
        >
          <i className="fa-regular fa-message message"></i>&nbsp;&nbsp;Liên hệ
        </a>
      </div>

      {/* Phần tìm kiếm đất */}
      <div className="search-building">
        <div className="main-content">
          {/* Tiêu đề trang */}
          <h1 className="title">Tìm đất</h1>

          {/* Thanh công cụ bộ lọc */}
          <div className="filter-bar">
            <button
              className="toggle-filter-btn"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? "Ẩn bộ lọc" : "Hiện bộ lọc"}
            </button>
          </div>

          {/* Bộ lọc */}
          {showFilters && (
            <div className="filters body">
              <div className="info show">
                <div className="item">
                  <label htmlFor="name">Tên bất động sản</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nhập tên bất động sản"
                    value={filters.name}
                    onChange={handleFilterChange}
                  />
                </div>

                <div className="item">
                  <label htmlFor="district">Quận</label>
                  <select
                    name="district"
                    id="district"
                    value={filters.district}
                    onChange={handleFilterChange}
                  >
                    <option value="">Chọn quận</option>
                    {districts.map((district, index) => (
                      <option key={index} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="border-item">
                  <div className="item">
                    <label htmlFor="floorAreaFrom">Diện tích tối thiểu</label>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input
                        type="number"
                        name="floorAreaFrom"
                        id="floorAreaFrom"
                        placeholder="16"
                        value={filters.floorAreaFrom}
                        onChange={handleFilterChange}
                      />
                      <span className="metvuong">m²</span>
                    </div>
                  </div>
                  <div className="item">
                    <label htmlFor="floorAreaTo">Diện tích tối đa</label>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input
                        type="number"
                        name="floorAreaTo"
                        id="floorAreaTo"
                        placeholder="50"
                        value={filters.floorAreaTo}
                        onChange={handleFilterChange}
                      />
                      <span className="metvuong">m²</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="action">
                <button className="btn-grad" onClick={applyFilters}>
                  Tìm kiếm
                </button>
              </div>
            </div>
          )}

          {/* Phần danh sách đất */}
          <div className="list-building">
            <h2 className="title-featured">Danh sách sản phẩm</h2>
            <div className="list">
              {currentRecords.map((it, idx) => (
                <div key={idx} className="item">
                  <div className="thumb">
                    {it.images[0]?.endsWith(".mp4") ? (
                      <video controls>
                        <source
                          src={`${api}/image/display-image-vid?filename=${it.images[0]}`}
                          type="video/mp4"
                        />
                      </video>
                    ) : (
                      <img
                        src={`${api}/image/display-image-vid?filename=${it.images[0]}`}
                        alt={it.name}
                      />
                    )}
                  </div>
                  <div className="body">
                    <h3 className="title">{it.name}</h3>
                    <p className="sub-title">
                      Địa chỉ: đường {it.street}, phường {it.ward}, quận/huyện{" "}
                      {it.district}
                    </p>
                    <p className="sub-title">Giá: {it.rentPrice}tr/ tháng</p>
                    <p className="desc">Mô tả: {it.description}</p>
                    <button
                      onClick={() => navigateToBuildingDetailPage(it.id)}
                      className="btn-grad"
                    >
                      Xem
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Điều khiển phân trang */}
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  className={`pagination-btn ${
                    currentPage === i + 1 ? "active" : ""
                  }`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Land;
