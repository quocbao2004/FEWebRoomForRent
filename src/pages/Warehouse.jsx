import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom';
// import '../assets/css/buildingSearch.css';
import { buildingSearchRequestHangleChange, BuildingSearchService } from '../services/BuildingSearchService';
import axios from 'axios';

// Import image for test
import featured1 from '../assets/img/home-img/featured.avif';

function Warehouse({api}) {
  const [showFilters, setShowFilters] = useState(false); // state để hiển thị hoặc ẩn các trường lọc

  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  const districts = [
    "Quận 1", "Quận 3", "Quận 4", "Quận 5", "Quận 6", "Quận 7", "Quận 8",
    "Quận 10", "Quận 11", "Quận 12", "Quận Bình Thạnh", "Quận Tân Bình",
    "Quận Tân Phú", "Quận Phú Nhuận", "Huyện Bình Chánh", "Thành Phố Thủ Đức",
    "Quận Bình Tân", "Quận Gò Vấp", "Huyện Cần Giờ", "Huyện Củ Chi",
    "Huyện Hóc Môn", "Huyện Nhà Bè"
  ];

  function navigateToBuildingDetailPage(id) {
    navigate("/detail", { state: { id: id } });
  }

  useEffect(() => {
    axios.get(api + "/building?type=KHO_XUONG")
      .then(res => {
        setRecords(res.data);
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <Header />

      <div className="search-building">
        <div className="main-content">
          <h1 className='title'>Tìm nhà kho</h1>
          <div className="filter-bar">
            <button
              className="toggle-filter-btn"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? 'Ẩn bộ lọc' : 'Hiện bộ lọc'}
            </button>
          </div>

          {showFilters && ( // Chỉ hiển thị form khi showFilters là true
            <div className="body">
              <div className="info show">
                <div className="item">
                  <label htmlFor="name">Tên bất động sản</label>
                  <input type="text" name="name" id="name" onChange={buildingSearchRequestHangleChange} />
                </div>

                <div className="item">
                  <label htmlFor="type">Loại</label>
                  <select name="type" id="type" defaultValue="" onChange={buildingSearchRequestHangleChange}>
                    <option value="">Chọn loại</option>
                    <option value="Kho">Kho</option>
                  </select>
                </div>

                <div className="item">
                  <label htmlFor="street">Đường</label>
                  <input type="text" name="street" id="street" onChange={buildingSearchRequestHangleChange} />
                </div>

                <div className="item">
                  <label htmlFor="ward">Phường</label>
                  <input type="text" name="ward" id="ward" onChange={buildingSearchRequestHangleChange} />
                </div>

                <div className="item">
                  <label htmlFor="district">Quận</label>
                  <select name="district" id="district" defaultValue="" onChange={buildingSearchRequestHangleChange}>
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
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <input type="number" name="floorAreaFrom" id="floorAreaFrom" placeholder='ex: 16,5' onChange={buildingSearchRequestHangleChange} />
                      <span className="metvuong">m²</span>
                    </div>
                  </div>
                  <div className="item">
                    <label htmlFor="floorAreaTo">Diện tích tối đa</label>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <input type="number" name="floorAreaTo" id="floorAreaTo" placeholder="ex: 20" onChange={buildingSearchRequestHangleChange} />
                      <span className="metvuong">m²</span>
                    </div>
                  </div>
                  <div className="item">
                    <label htmlFor="rentPriceFrom">Giá thuê tối thiểu</label>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <input type="number" name="rentPriceFrom" id="rentPriceFrom" placeholder="ex: 1,6" onChange={buildingSearchRequestHangleChange} />
                      <span className="metvuong">Triệu</span>
                    </div>
                  </div>
                  <div className="item">
                    <label htmlFor="rentPriceTo">Giá thuê tối đa</label>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <input type="number" name="rentPriceTo" id="rentPriceTo" placeholder="ex: 3" onChange={buildingSearchRequestHangleChange} />
                      <span className="metvuong">Triệu</span>
                    </div>
                  </div>
                </div>
                <div className="action">
                  <button href="#!" className="btn submit-btn" onClick={() => BuildingSearchService(api, setRecords, "KHO_XUONG")}>
                    Tìm kiếm
                  </button>
                </div>
              </div>

            </div>
          )}

          <div className="featured">
            <div className="main-content">
              <h2 className="title-featured">Danh sách sản phẩm</h2>
              <div className="list">
                {
                  records.map(function (it, idx) {
                    return (
                      <div key={idx} className="item">
                        <a href="#">
                          {
                            it.images.map((image, idx) => {
                              if (idx > 0) return;
                              let lastIdxOfDot = it.images[0].lastIndexOf(".");
                              let s = image.substring(lastIdxOfDot);
                              return (
                                <div key={idx}>
                                  {
                                    s.localeCompare(".mp4") == 0 ?
                                      <video class="thumb" width="750" height="500" controls key={idx}>
                                        <source src={`http://localhost:8080/api/image/display-image-vid?filename=${image}`} type="video/mp4" />
                                      </video> :
                                      <img class="thumb" src={`http://localhost:8080/api/image/display-image-vid?filename=${image}`} key={idx} />
                                  }
                                </div>
                              )
                            })
                          }
                        </a>
                        <div class="body">
                          <h3 class="title line-clamp">
                            <a href="#" class="line-clamp">{it.name}</a>
                          </h3>
                          <p class="sub-title line-clamp">Giá: {it.rentPrice}tr/ tháng</p>
                          <div class="info">
                            <p className="desc line-clamp">{it.description}</p>
                          </div>
                          <div className="action">
                            <button onClick={() => navigateToBuildingDetailPage(it.id)} className='btn btn-seen'>Xem</button>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Warehouse;