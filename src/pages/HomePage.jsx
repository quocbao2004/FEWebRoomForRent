import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import homeBackground from '../assets/img/home-img/home-background.avif'
import '../assets/css/home.css'

// Import image for test
import featured1 from '../assets/img/home-img/featured.avif';

function HomePage() {
  return (
    <>
      <Header />
      <div className="home">
        {/* Slider */}
        <div className="slider">
          <img src={homeBackground} alt="" className="home-img" />
          <div className="slider-content">
            <h1 className="title">Website cho thuê trọ sài gòn giá rẻ</h1>
            <p className="desc">Chào mừng bạn đến với website cho thuê trọ Sài Gòn giá rẻ! Tại đây,
               bạn sẽ tìm thấy nhiều lựa chọn phòng trọ phù hợp với nhu cầu của mình. Chúc bạn có trải nghiệm tuyệt vời!</p>
          </div>
        </div>
        <div className="main-content">
          <div className="body">
            {/* Introduction */}
            <div className="introduction">
              <div className="row">
                <h2 className="title">Ở đây, chúng tôi cung cấp các dịch vụ</h2>
                <ul className="menu">
                  <li className="item">Cho thuê phòng trọ</li>
                  <li className="item">Cho thuê nhà nguyên căn</li>
                  <li className="item">Cung cấp các dịch vụ sửa chữa nhà</li>
                  <li className="item">Đăng bài cho thuê</li>
                </ul>
              </div>
            </div>
            {/* Featured Model */}
            <div className="featured">
              <h2 className="title-featured">Phòng nổi bật</h2>
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
              </div>
            </div>

            {/* Contact */}
            {/* <div className="contact">
              <div className="body">
              <h2 className="contact-title">Liên hệ</h2>
                <div className="contact-content">
                  <h3>Bạn cần hỗ trợ ?</h3>
                  <p className="desc">
                    Chúng tôi rất hân hạnh được hỗ trợ bạn, hãy để lại thông tin liên lạc cho chúng tôi nhé, 
                    yêu cầu của bạn sẽ được xử lý và phản hồi sớm nhất
                  </p>
              
                  </div>
                  <div className="submit-info">
                    <div className="row">
                      <div className="item">
                        <label htmlFor="customerName">Họ và tên &nbsp;<strong className="strong">*</strong> </label>
                        <input type="text" name="customerName" id="customerName" />
                      </div>

                      <div className="item">
                        <label htmlFor="customerPhone">Số điện thoại &nbsp;<strong className="strong">*</strong> </label>
                        <input type="text" name="customerPhone" id="customerPhone" />
                      </div>
                    </div>

                    <div className="item">
                      <label htmlFor="customerDesc">Mô tả chi tiết</label>
                      <textarea name="customerDesc" id="customerDesc" rows="5" cols="5"></textarea>
                    </div>

                    <div className="action">
                      <div className="btn btn-submit">
                        Gửi
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        
      <Footer />
    </>
  );
}

export default HomePage;
