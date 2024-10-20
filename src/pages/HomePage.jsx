import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import homeBackground from '../assets/img/home-img/homeslide.webp'
import '../assets/css/home.css'
import Zalo from '../assets/img/index-img/zalo_icon.png';
import Why from '../assets/img/index-img/DALL·E 2024-10-20 18.09.12 - A modern 3D style illustration for a room rental website in Saigon. The image features a thoughtful character, representing a customer searching f.webp';
import Service from '../assets/img/index-img/service.webp';
// Import image for test
import featured1 from '../assets/img/home-img/featured.avif';

function HomePage() {
 

  const location = useLocation();

  useEffect(() => {
    const scrollToElement = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    if (location.hash === "#contact") {
        scrollToElement("contact");
    } else if (location.hash === "#introduction") {
        scrollToElement("introduction");
    }
}, [location]);

  return (
    <>
      <Header />
      <div className="home">
        {/* Slider */}
        <div className="slider">
          <img src={homeBackground} alt="" className="home-img" />
          <div className="slider-content">
            <h1 className="title overlay-text">Website cho thuê trọ sài gòn giá rẻ</h1>
            <br />
            <p className="desc overlay-text">Chào mừng bạn đến với website cho thuê trọ Sài Gòn giá rẻ! </p>
            <br />
            <p className="desc overlay-text">Tại đây,
            bạn sẽ tìm thấy nhiều lựa chọn phòng trọ phù hợp với nhu cầu của mình. Chúc bạn có trải nghiệm tuyệt vời!</p>
          </div>
        </div>
        
        {/* Intro */}
        <div id="introduction">
          <div className="main-content">
            <div className="body">
              <div className="row">
                <div className="row-why">
                  <img src={Why} alt="" className="why-img" />
                </div>

                <div className="row-why">
                <h2 className="title">Tại sao nên chọn chúng tôi ?</h2>
                  <ul className="menu">

                    <li className="item">
                      <div className="tick">
                        ✔
                      </div>
                      <div className="item-content">
                        <p className="sub-title">Phòng cho thuê giá rẻ</p>
                        <p className='desc'>Chúng tôi cam kết cung cấp phòng trọ với giá cả hợp lý, phù hợp cho sinh viên, người đi làm và người mới đến thành phố. Giá chỉ từ 1.200.000 đ</p>
                      </div>
                    </li>

                    <li className="item">
                      <div className="tick">
                        ✔
                      </div>
                      <div className="item-content">
                        <p className="sub-title">Chất lượng dịch vụ vượt trội</p>
                        <p className='desc'>Với đội ngũ chăm sóc khách hàng nhiệt tình, chúng tôi luôn sẵn sàng hỗ trợ bạn trong quá trình tìm kiếm và thuê nhà.</p>
                      </div>
                    </li>

                    <li className="item">
                      <div className="tick">
                        ✔
                      </div>
                      <div className="item-content">
                        <p className="sub-title">Vị trí thuận lợi</p>
                        <p className='desc'>Các phòng trọ của chúng tôi đều nằm ở những khu vực gần trung tâm, dễ dàng di chuyển đến các chợ, bến xe, công ty, và các tiện ích công cộng.</p>
                      </div>
                    </li>

                    <li className="item">
                      <div className="tick">
                        ✔
                      </div>
                      <div className="item-content">
                        <p className="sub-title">An ninh và môi trường sống lành mạnh</p>
                        <p className='desc'>Đảm bảo môi trường sống an toàn, vệ sinh, và tiện nghi với hệ thống an ninh hiện đại và quản lý chuyên nghiệp.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="row-why">
                <h2 className="title">Chúng tôi cung cấp các dịch vụ gì?</h2>
                  <ul className="menu">
                    <li className="item">
                      <div className="tick">
                        ✔
                      </div>
                      <div className="item-content">
                        <p className="sub-title">Phòng trọ cho thuê với nhiều lựa chọn</p>
                        <p className='desc'>Từ phòng đơn giản đến phòng đầy đủ tiện nghi, đáp ứng nhu cầu đa dạng của khách hàng.</p>
                      </div>
                    </li>
                    <li className="item">
                      <div className="tick">
                        ✔
                      </div>
                      <div className="item-content">
                        <p className="sub-title">Nhà nguyên căn cho thuê dài hạn</p>
                        <p className='desc'>Đối với những gia đình hoặc nhóm bạn muốn có không gian riêng tư, chúng tôi cung cấp nhà nguyên căn rộng rãi, thoáng mát.</p>
                      </div>
                    </li>
                    <li className="item">
                      <div className="tick">
                        ✔
                      </div>
                      <div className="item-content">
                        <p className="sub-title">Dịch vụ sửa chữa và bảo trì</p>
                        <p className='desc'>Đội ngũ sửa chữa chuyên nghiệp, luôn sẵn sàng hỗ trợ khi bạn cần bảo trì hoặc cải thiện không gian sống.</p>
                      </div>
                    </li>
                    <li className="item">
                      <div className="tick">
                        ✔
                      </div>
                      <div className="item-content">
                        <p className="sub-title">Đăng tin cho thuê</p>
                        <p className='desc'>Nếu bạn là chủ nhà, hãy đăng tin trên hệ thống của chúng tôi để tìm người thuê một cách nhanh chóng và hiệu quả.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="row-why">
                  <img src={Service} alt="" className="why-img" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Model */}
        <div className="featured">
              <div className="main-content">
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
        </div>

        {/* Contact */}
        <div id="contact">
              <div className="main-content">
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
                        <textarea name="customerDesc" id="customerDesc" col='5' row='5'></textarea>
                      </div>

                      <div className="action">
                        <div className="btn btn-submit">
                          Gửi
                        </div>
                      </div>

                        <div className="contact-manager">
                          <p className="desc">Hoặc liên hệ qua</p>
                          <div className="list-icon">
                            <a href="https://www.facebook.com/profile.php?id=100004721740519" target="_blank" className='font-icon'>
                              <i class="fa-brands fa-facebook"></i>
                            </a>
                            <a href="https://zalo.me/0909437393" target="_blank" >
                              <img src={Zalo} alt="" className="img-zalo" />
                            </a>
                            <a href="https://www.youtube.com/@nguyenkhang0111" target="_blank" className='font-icon'>
                              <i class="fa-brands fa-youtube"></i>
                            </a>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
        </div>
      </div>  
      <Footer />
    </>
  );
}

export default HomePage;