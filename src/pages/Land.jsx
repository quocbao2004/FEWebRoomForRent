import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

// Import image for test
import featured1 from '../assets/img/home-img/featured.avif';

function Land() {
  const [showFilters, setShowFilters] = useState(false); // state để hiển thị hoặc ẩn các trường lọc

  const districts = [
    "Quận 1", "Quận 3", "Quận 4", "Quận 5", "Quận 6", "Quận 7", "Quận 8", 
    "Quận 10", "Quận 11", "Quận 12", "Quận Bình Thạnh", "Quận Tân Bình", 
    "Quận Tân Phú", "Quận Phú Nhuận", "Huyện Bình Chánh", "Thành Phố Thủ Đức", 
    "Quận Bình Tân", "Quận Gò Vấp", "Huyện Cần Giờ", "Huyện Củ Chi", 
    "Huyện Hóc Môn", "Huyện Nhà Bè"
  ];

  return (
    <div>
      <Header />
      
      <div className="search-building">
        <div className="main-content">
          <h1 className='title'>Tìm đất</h1>
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
                    <input type="text" name="name" id="name" />
                  </div>

                  <div className="item">
                    <label htmlFor="type">Loại</label>
                    <select name="type" id="type" defaultValue="">
                      <option value="">Chọn loại</option>
                      <option value="Đất">Đất</option>
                    </select>
                  </div>

                  <div className="item">
                    <label htmlFor="street">Đường</label>
                    <input type="text" name="street" id="street" />
                  </div>

                  <div className="item">
                    <label htmlFor="ward">Phường</label>
                    <input type="text" name="ward" id="ward" />
                  </div>

                  <div className="item">
                    <label htmlFor="district">Quận</label>
                    <select name="district" id="district" defaultValue="">
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
                        <input type="number" name="floorAreaFrom" id="floorAreaFrom" placeholder='ex: 16,5'/>
                        <span className="metvuong">m²</span>
                      </div>
                    </div>
                    <div className="item">
                      <label htmlFor="floorAreaTo">Diện tích tối đa</label>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="number" name="floorAreaTo" id="floorAreaTo" placeholder="ex: 20" />
                        <span className="metvuong">m²</span>
                      </div>
                    </div>
                    <div className="item">
                      <label htmlFor="rentPriceFrom">Giá thuê tối thiểu</label>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="number" name="rentPriceFrom" id="rentPriceFrom" placeholder="ex: 1,6" />
                        <span className="metvuong">Triệu</span>
                      </div>
                    </div>
                    <div className="item">
                      <label htmlFor="rentPriceTo">Giá thuê tối đa</label>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="number" name="rentPriceTo" id="rentPriceTo" placeholder="ex: 3" />
                        <span className="metvuong">Triệu</span>
                      </div>
                    </div>
                  </div>
                  <div className="action">
                  <a href="#!" className="btn submit-btn">Tìm kiếm</a>
                </div>
                </div>

            </div>
          )}

            <div className="featured">
              <div className="main-content">
                <h2 className="title-featured">Danh sách sản phẩm</h2>
                <div className="list">
                  <div className="item">
                    <a href="#">
                      <img src={featured1} alt="Nikko Apartments" class="thumb" />
                    </a>
                    <div class="body">
                      <h3 class="title line-clamp"><a href="#" class="line-clamp">Nhà cho thuê hẻm 20 đường Cao Lỗ Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime laboriosam iste natus necessitatibus earum! Nobis odit consequatur enim est. Impedit.  </a></h3>
                      <p class="sub-title line-clamp">Giá: 20tr/ tháng</p>
                      <div class="info">
                        <p className="desc line-clamp">
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla fugiat nesciunt, saepe laudantium iste impedit quos voluptates quisquam suscipit! Quia explicabo iusto modi cumque incidunt facilis ex possimus officia delectus!
                        </p>
                      </div>

                      <div className="action">
                        <a href="#" className="btn btn-seen">Xem</a>
                      </div>
                    </div> 
                  </div>
                  <div className="item">
                    <a href="#">
                      <img src={featured1} alt="Nikko Apartments" class="thumb" />
                    </a>
                    <div class="body">
                      <h3 class="title line-clamp"><a href="#" class="line-clamp">Nhà cho thuê hẻm 20 đường Cao Lỗ Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime laboriosam iste natus necessitatibus earum! Nobis odit consequatur enim est. Impedit.  </a></h3>
                      <p class="sub-title line-clamp">Giá: 20tr/ tháng</p>
                      <div class="info">
                        <p className="desc line-clamp">
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla fugiat nesciunt, saepe laudantium iste impedit quos voluptates quisquam suscipit! Quia explicabo iusto modi cumque incidunt facilis ex possimus officia delectus!
                        </p>
                      </div>

                      <div className="action">
                        <a href="#" className="btn btn-seen">Xem</a>
                      </div>
                    </div> 
                  </div>

                  <div className="item">
                    <a href="#">
                      <img src={featured1} alt="Nikko Apartments" class="thumb" />
                    </a>
                    <div class="body">
                      <h3 class="title line-clamp"><a href="#" class="line-clamp">Nhà cho thuê hẻm 20 đường Cao Lỗ Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime laboriosam iste natus necessitatibus earum! Nobis odit consequatur enim est. Impedit.  </a></h3>
                      <p class="sub-title line-clamp">Giá: 20tr/ tháng</p>
                      <div class="info">
                        <p className="desc line-clamp">
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla fugiat nesciunt, saepe laudantium iste impedit quos voluptates quisquam suscipit! Quia explicabo iusto modi cumque incidunt facilis ex possimus officia delectus!
                        </p>
                      </div>

                      <div className="action">
                        <a href="#" className="btn btn-seen">Xem</a>
                      </div>
                    </div> 
                  </div>
                  <div className="item">
                    <a href="#">
                      <img src={featured1} alt="Nikko Apartments" class="thumb" />
                    </a>
                    <div class="body">
                      <h3 class="title line-clamp"><a href="#" class="line-clamp">Nhà cho thuê hẻm 20 đường Cao Lỗ Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime laboriosam iste natus necessitatibus earum! Nobis odit consequatur enim est. Impedit.  </a></h3>
                      <p class="sub-title line-clamp">Giá: 20tr/ tháng</p>
                      <div class="info">
                        <p className="desc line-clamp">
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla fugiat nesciunt, saepe laudantium iste impedit quos voluptates quisquam suscipit! Quia explicabo iusto modi cumque incidunt facilis ex possimus officia delectus!
                        </p>
                      </div>

                      <div className="action">
                        <a href="#" className="btn btn-seen">Xem</a>
                      </div>
                    </div> 
                  </div>
                  <div className="item">
                    <a href="#">
                      <img src={featured1} alt="Nikko Apartments" class="thumb" />
                    </a>
                    <div class="body">
                      <h3 class="title line-clamp"><a href="#" class="line-clamp">Nhà cho thuê hẻm 20 đường Cao Lỗ Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime laboriosam iste natus necessitatibus earum! Nobis odit consequatur enim est. Impedit.  </a></h3>
                      <p class="sub-title line-clamp">Giá: 20tr/ tháng</p>
                      <div class="info">
                        <p className="desc line-clamp">
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla fugiat nesciunt, saepe laudantium iste impedit quos voluptates quisquam suscipit! Quia explicabo iusto modi cumque incidunt facilis ex possimus officia delectus!
                        </p>
                      </div>

                      <div className="action">
                        <a href="#" className="btn btn-seen">Xem</a>
                      </div>
                    </div> 
                  </div>

                  <div className="item">
                    <a href="#">
                      <img src={featured1} alt="Nikko Apartments" class="thumb" />
                    </a>
                    <div class="body">
                      <h3 class="title line-clamp"><a href="#" class="line-clamp">Nhà cho thuê hẻm 20 đường Cao Lỗ Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime laboriosam iste natus necessitatibus earum! Nobis odit consequatur enim est. Impedit.  </a></h3>
                      <p class="sub-title line-clamp">Giá: 20tr/ tháng</p>
                      <div class="info">
                        <p className="desc line-clamp">
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla fugiat nesciunt, saepe laudantium iste impedit quos voluptates quisquam suscipit! Quia explicabo iusto modi cumque incidunt facilis ex possimus officia delectus!
                        </p>
                      </div>

                      <div className="action">
                        <a href="#" className="btn btn-seen">Xem</a>
                      </div>
                    </div> 
                  </div>

                  <div className="item">
                    <a href="#">
                      <img src={featured1} alt="Nikko Apartments" class="thumb" />
                    </a>
                    <div class="body">
                      <h3 class="title line-clamp"><a href="#" class="line-clamp">Nhà cho thuê hẻm 20 đường Cao Lỗ Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime laboriosam iste natus necessitatibus earum! Nobis odit consequatur enim est. Impedit.  </a></h3>
                      <p class="sub-title line-clamp">Giá: 20tr/ tháng</p>
                      <div class="info">
                        <p className="desc line-clamp">
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla fugiat nesciunt, saepe laudantium iste impedit quos voluptates quisquam suscipit! Quia explicabo iusto modi cumque incidunt facilis ex possimus officia delectus!
                        </p>
                      </div>

                      <div className="action">
                        <a href="#" className="btn btn-seen">Xem</a>
                      </div>
                    </div> 
                  </div>
                  <div className="item">
                    <a href="#">
                      <img src={featured1} alt="Nikko Apartments" class="thumb" />
                    </a>
                    <div class="body">
                      <h3 class="title line-clamp"><a href="#" class="line-clamp">Nhà cho thuê hẻm 20 đường Cao Lỗ Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime laboriosam iste natus necessitatibus earum! Nobis odit consequatur enim est. Impedit.  </a></h3>
                      <p class="sub-title line-clamp">Giá: 20tr/ tháng</p>
                      <div class="info">
                        <p className="desc line-clamp">
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla fugiat nesciunt, saepe laudantium iste impedit quos voluptates quisquam suscipit! Quia explicabo iusto modi cumque incidunt facilis ex possimus officia delectus!
                        </p>
                      </div>

                      <div className="action">
                        <a href="#" className="btn btn-seen">Xem</a>
                      </div>
                    </div> 
                  </div>

                  <div className="item">
                    <a href="#">
                      <img src={featured1} alt="Nikko Apartments" class="thumb" />
                    </a>
                    <div class="body">
                      <h3 class="title line-clamp"><a href="#" class="line-clamp">Nhà cho thuê hẻm 20 đường Cao Lỗ Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime laboriosam iste natus necessitatibus earum! Nobis odit consequatur enim est. Impedit.  </a></h3>
                      <p class="sub-title line-clamp">Giá: 20tr/ tháng</p>
                      <div class="info">
                        <p className="desc line-clamp">
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla fugiat nesciunt, saepe laudantium iste impedit quos voluptates quisquam suscipit! Quia explicabo iusto modi cumque incidunt facilis ex possimus officia delectus!
                        </p>
                      </div>

                      <div className="action">
                        <a href="#" className="btn btn-seen">Xem</a>
                      </div>
                    </div> 
                  </div>

                </div>
              </div>
        </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Land;