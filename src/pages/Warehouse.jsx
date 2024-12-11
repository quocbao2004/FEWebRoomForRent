import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { api } from "../script/common";

function Warehouse() {
  const [showFilters, setShowFilters] = useState(false); // Show/hide filters
  const [records, setRecords] = useState([]); // All records from API
  const [filteredRecords, setFilteredRecords] = useState([]); // Filtered records
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [pageSize] = useState(6); // Items per page
  const [filters, setFilters] = useState({
    name: "",
    district: "",
    floorAreaFrom: 0,
    floorAreaTo: Infinity,
  }); // Filter values
  const navigate = useNavigate();

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

  function navigateToBuildingDetailPage(id) {
    navigate("/detail", { state: { id } });
  }

  // Fetch data from the API
  useEffect(() => {
    axios
      .get(api + "/building?type=KHO")
      .then((res) => {
        setRecords(res.data);
        setFilteredRecords(res.data); // Initialize filtered records
      })
      .catch((err) => console.log(err));
  }, []);

  // Handle filtering based on input values
  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = records.filter((record) => {
      const matchesName =
        filters.name === "" ||
        record.name.toLowerCase().includes(filters.name.toLowerCase());
      const matchesDistrict =
        filters.district === "" || record.district === filters.district;
      const matchesFloorArea =
        record.floorArea >= filters.floorAreaFrom &&
        record.floorArea <= filters.floorAreaTo;

      return matchesName && matchesDistrict && matchesFloorArea;
    });
    setFilteredRecords(filtered);
    setCurrentPage(1); // Reset to the first page
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredRecords.length / pageSize);
  const currentRecords = filteredRecords.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div>
      <Header />
      <div className="contact-fixed">
        <a
          href="https://zalo.me/0909437393"
          target="_blank"
          className="message"
        >
          <i className="fa-regular fa-message message"></i>&nbsp;&nbsp;Liên hệ
        </a>
      </div>
      <div className="search-building">
        <div className="main-content">
          <h1 className="title">Tìm nhà kho</h1>
          <div className="filter-bar">
            <button
              className="toggle-filter-btn"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? "Ẩn bộ lọc" : "Hiện bộ lọc"}
            </button>
          </div>

          {showFilters && (
            <div className="filters body">
              <form onSubmit={handleSearch}>
                <div className="info show">
                  <div className="item">
                    <label htmlFor="name">Tên bất động sản</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Nhập tên bất động sản"
                      value={filters.name}
                      onChange={(e) =>
                        setFilters({ ...filters, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="item">
                    <label htmlFor="district">Quận</label>
                    <select
                      name="district"
                      id="district"
                      value={filters.district}
                      onChange={(e) =>
                        setFilters({ ...filters, district: e.target.value })
                      }
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
                          onChange={(e) =>
                            setFilters({
                              ...filters,
                              floorAreaFrom: Number(e.target.value),
                            })
                          }
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
                          onChange={(e) =>
                            setFilters({
                              ...filters,
                              floorAreaTo: Number(e.target.value),
                            })
                          }
                        />
                        <span className="metvuong">m²</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="action">
                  <button type="submit" className="btn-grad">
                    Tìm kiếm
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="list-building">
            <div className="main-content">
              <h2 className="title-featured">Danh sách sản phẩm</h2>
              <div className="list">
                {currentRecords.map((it, idx) => (
                  <div key={idx} className="item">
                    <a href="#" className="thumb">
                      {it.images.map((image, idx) => {
                        if (idx > 0) return null;
                        const extension = image.split(".").pop();
                        return (
                          <div key={idx} className="thumb">
                            {extension === "mp4" ? (
                              <video controls>
                                <source
                                  src={`${api}/image/display-image-vid?filename=${image}`}
                                  type="video/mp4"
                                />
                              </video>
                            ) : (
                              <img
                                src={`${api}/image/display-image-vid?filename=${image}`}
                                alt={it.name}
                              />
                            )}
                          </div>
                        );
                      })}
                    </a>
                    <div className="body">
                      <h3 className="title">{it.name}</h3>
                      <p className="sub-title">
                        Địa chỉ: {it.street}, {it.ward}, {it.district}
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

              {/* Pagination Controls */}
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
      </div>

      <Footer />
    </div>
  );
}

export default Warehouse;
