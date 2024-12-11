import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/css/buildingSearch.css";
import { api } from "../script/common";

const BuildingSearchPage = () => {
  // State lưu dữ liệu gốc (từ API) và dữ liệu đã lọc
  const [originalRecords, setOriginalRecords] = useState([]);
  const [records, setRecords] = useState([]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(6);

  // Bộ lọc
  const [filters, setFilters] = useState({
    name: "",
    type: "",
    district: "",
    rentPriceFrom: "",
    rentPriceTo: "",
  });

  const navigate = useNavigate();

  // Lấy dữ liệu từ API khi tải trang
  useEffect(() => {
    fetchBuildings();
  }, []);

  const fetchBuildings = async () => {
    try {
      const response = await axios.get(
        api + "/building?type=PHONG_TRO,NGUYEN_CAN"
      );
      setOriginalRecords(response.data); // Lưu dữ liệu gốc
      setRecords(response.data); // Hiển thị dữ liệu ban đầu
    } catch (error) {
      console.error("Error fetching buildings:", error);
    }
  };

  // Hàm áp dụng bộ lọc
  const applyFilters = () => {
    const { name, type, district, rentPriceFrom, rentPriceTo } = filters;
    const filtered = originalRecords.filter((building) => {
      const matchesName = name
        ? building.name.toLowerCase().includes(name.toLowerCase())
        : true;
      const matchesType = type ? building.type === type : true;
      const matchesDistrict = district
        ? building.district.toLowerCase().includes(district.toLowerCase())
        : true;
      const matchesRentPriceFrom = rentPriceFrom
        ? building.rentPrice >= parseFloat(rentPriceFrom)
        : true;
      const matchesRentPriceTo = rentPriceTo
        ? building.rentPrice <= parseFloat(rentPriceTo)
        : true;

      return (
        matchesName &&
        matchesType &&
        matchesDistrict &&
        matchesRentPriceFrom &&
        matchesRentPriceTo
      );
    });

    setRecords(filtered);
    setCurrentPage(1); // Reset về trang đầu tiên
  };

  // Hàm xử lý khi thay đổi bộ lọc
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

  // Điều hướng đến trang chi tiết
  const navigateToBuildingDetailPage = (id) => {
    navigate("/detail", { state: { id } });
  };

  return (
    <div className="search-building-page">
      <Header />

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

      <div className="search-building">
        <div className="main-content">
          <h1 className="title">Tìm bất động sản</h1>

          {/* Phần bộ lọc */}
          <div className="filters">
            <h2>Bộ lọc</h2>
            <div className="filter-fields">
              <div className="filter-item">
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
              <div className="filter-item">
                <label htmlFor="type">Loại</label>
                <select
                  name="type"
                  id="type"
                  value={filters.type}
                  onChange={handleFilterChange}
                >
                  <option value="">Tất cả</option>
                  <option value="PHONG_TRO">Phòng trọ</option>
                  <option value="NGUYEN_CAN">Nguyên căn</option>
                </select>
              </div>
              <div className="filter-item">
                <label htmlFor="district">Quận</label>
                <input
                  type="text"
                  name="district"
                  id="district"
                  placeholder="Nhập quận"
                  value={filters.district}
                  onChange={handleFilterChange}
                />
              </div>
              <div className="filter-item">
                <label htmlFor="rentPriceFrom">Giá thuê từ (Triệu)</label>
                <input
                  type="number"
                  name="rentPriceFrom"
                  id="rentPriceFrom"
                  placeholder="Nhập giá tối thiểu"
                  value={filters.rentPriceFrom}
                  onChange={handleFilterChange}
                />
              </div>
              <div className="filter-item">
                <label htmlFor="rentPriceTo">Giá thuê đến (Triệu)</label>
                <input
                  type="number"
                  name="rentPriceTo"
                  id="rentPriceTo"
                  placeholder="Nhập giá tối đa"
                  value={filters.rentPriceTo}
                  onChange={handleFilterChange}
                />
              </div>
              <button className="btn-grad" onClick={applyFilters}>
                Áp dụng bộ lọc
              </button>
            </div>
          </div>

          {/* Phần danh sách sản phẩm */}
          <div className="list-building">
            <h2 className="title-featured">Danh sách sản phẩm</h2>
            <div className="list">
              {currentRecords.map((building, idx) => (
                <div key={idx} className="item">
                  <div className="thumb">
                    {building.images[0]?.endsWith(".mp4") ? (
                      <video controls>
                        <source
                          src={`${api}/image/display-image-vid?filename=${building.images[0]}`}
                          type="video/mp4"
                        />
                      </video>
                    ) : (
                      <img
                        src={`${api}/image/display-image-vid?filename=${building.images[0]}`}
                        alt={building.name}
                      />
                    )}
                  </div>
                  <div className="body">
                    <h3 className="title">{building.name}</h3>
                    <p className="sub-title">
                      Địa chỉ: đường {building.street}, phường {building.ward},
                      quận/huyện {building.district}
                    </p>
                    <p className="sub-title">
                      Giá: {building.rentPrice}tr/ tháng
                    </p>
                    <button
                      onClick={() => navigateToBuildingDetailPage(building.id)}
                      className="btn-grad"
                    >
                      XEM
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Phân trang */}
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

export default BuildingSearchPage;
