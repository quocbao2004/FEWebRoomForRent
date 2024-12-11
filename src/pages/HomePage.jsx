import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import homeBackground from "../assets/img/home-img/homeslide.webp";
import "../assets/css/home.css";
import { api } from "../script/common";
import axios from "axios";

function HomePage() {
  const [records, setRecords] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

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

  useEffect(() => {
    axios
      .get(api + "/building?type=")
      .then((res) => {
        setRecords(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  let customerData = {
    fullName: "",
    phone: "",
    demand: "",
    id: null,
  };

  function createCustomerHandler(e) {
    // Update the `customerData` object dynamically
    customerData = { ...customerData, [e.target.name]: e.target.value.trim() };

    // Log the updated customerData for debugging
    console.log("Updated customer data:", customerData);
  }

  function createCustomer() {
    // Validate fields before making the API call
    if (!customerData.fullName || !customerData.phone || !customerData.demand) {
      alert("Please fill in all required fields before submitting.");
      return;
    }

    // Log customerData for debugging
    console.log("Sending customer data:", customerData);

    axios
      .post(api + "/customer/add-customer", customerData)
      .then((response) => {
        console.log("Customer created successfully:", response.data);
        alert("Your information has been submitted successfully!");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error creating customer:", error);
        if (error.response && error.response.data) {
          alert(`Error: ${error.response.data.message}`);
        } else {
          alert("An unexpected error occurred. Please try again later.");
        }
      });
  }

  return (
    <>
      <Header />
      <div class="preloader"></div>

      <div className="home">
        <div className="contact-fixed">
          <a
            href="https://zalo.me/0909437393"
            target="_blank"
            className="message"
          >
            <i class="fa-regular fa-message message"></i>&nbsp;&nbsp;Liên hệ
          </a>
        </div>
        {/* Slider */}
        <div className="slider">
          <img src={homeBackground} alt="" className="home-img" />
          <div className="slider-content">
            <h1 className="title overlay-text">
              Website cho thuê trọ sài gòn giá rẻ
            </h1>
            <br />
            <p className="desc overlay-text">
              Chào mừng bạn đến với website cho thuê trọ Sài Gòn giá rẻ!{" "}
            </p>
            <br />
            <p className="desc overlay-text">
              Tại đây, bạn sẽ tìm thấy nhiều lựa chọn phòng trọ phù hợp với nhu
              cầu của mình. Chúc bạn có trải nghiệm tuyệt vời!
            </p>
          </div>
        </div>

        {/* Intro */}
        <div id="introduction">
          <h2>Tại sao nên chọn chúng tôi?</h2>
          <p class="intro-desc">
            Chúng tôi tự hào là đơn vị hàng đầu trong lĩnh vực cung cấp dịch vụ
            cho thuê phòng trọ và nhà ở tại khu vực Sài Gòn. Với kinh nghiệm lâu
            năm cùng đội ngũ chuyên nghiệp, chúng tôi luôn nỗ lực không ngừng để
            mang đến những giải pháp tối ưu, giúp khách hàng dễ dàng tìm được
            nơi ở phù hợp nhất. Dưới đây là những giá trị vượt trội mà chúng tôi
            cam kết mang đến cho bạn:
          </p>
          <ul class="menu">
            <li class="item">
              <div class="item-content">
                <p class="sub-title">Chất lượng dịch vụ vượt trội</p>
                <p class="desc">
                  Chúng tôi không chỉ cung cấp dịch vụ thuê phòng mà còn mang
                  đến trải nghiệm khách hàng hoàn hảo. Đội ngũ hỗ trợ luôn sẵn
                  sàng tư vấn, giải đáp mọi thắc mắc và đồng hành cùng bạn trong
                  suốt quá trình thuê nhà.
                </p>
              </div>
            </li>
            <li class="item">
              <div class="item-content">
                <p class="sub-title">Phòng trọ đa dạng, giá cả hợp lý</p>
                <p class="desc">
                  Dù bạn là sinh viên, nhân viên văn phòng, hay hộ gia đình,
                  chúng tôi đều có những lựa chọn phù hợp với bạn. Với mức giá
                  khởi điểm chỉ từ
                  <strong>1.200.000 VNĐ/tháng</strong>, chúng tôi mang đến nhiều
                  loại phòng, từ cơ bản đến cao cấp.
                </p>
              </div>
            </li>
            <li class="item">
              <div class="item-content">
                <p class="sub-title">Vị trí thuận lợi</p>
                <p class="desc">
                  Các phòng trọ của chúng tôi nằm ở các khu vực trung tâm, gần
                  các tiện ích quan trọng như chợ, siêu thị, trường học, và bệnh
                  viện. Bạn có thể dễ dàng di chuyển đến nơi làm việc hoặc học
                  tập mà không mất quá nhiều thời gian.
                </p>
              </div>
            </li>
            <li class="item">
              <div class="item-content">
                <p class="sub-title">Môi trường sống an ninh và lành mạnh</p>
                <p class="desc">
                  Với hệ thống an ninh hiện đại, đội ngũ quản lý chuyên nghiệp
                  và môi trường sống sạch sẽ, chúng tôi đảm bảo rằng nơi ở của
                  bạn sẽ luôn an toàn, yên tĩnh và thoải mái.
                </p>
              </div>
            </li>
            <li class="item">
              <div class="item-content">
                <p class="sub-title">Tiện ích đi kèm hiện đại</p>
                <p class="desc">
                  Chúng tôi cung cấp nhiều tiện ích đi kèm như internet tốc độ
                  cao, máy giặt chung, bãi giữ xe an toàn và hệ thống camera
                  giám sát 24/7, giúp bạn tiết kiệm thời gian và nâng cao chất
                  lượng cuộc sống.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="customer-reviews">
          <h2 className="reviews-title">Đánh giá từ khách hàng</h2>
          <div className="reviews-list">
            <div className="review-item">
              <p className="review-text">
                "Dịch vụ thật tuyệt vời, tôi đã tìm được phòng trọ ưng ý chỉ
                trong một ngày! Nhân viên hỗ trợ rất nhiệt tình."
              </p>
              <p className="review-author">- Nguyễn Văn An</p>
            </div>
            <div className="review-item">
              <p className="review-text">
                "Phòng rất sạch sẽ và an ninh. Tôi cảm thấy rất an tâm khi sống
                ở đây."
              </p>
              <p className="review-author">- Trần Thị Bích Ngọc</p>
            </div>
            <div className="review-item">
              <p className="review-text">
                "Giá cả hợp lý và nhiều tiện ích, tôi rất hài lòng với lựa chọn
                của mình."
              </p>
              <p className="review-author">- Lê Nguyễn Khánh Vân</p>
            </div>
          </div>
        </div>

        <div className="blog-section">
          <h2 className="blog-title">Blog & Tin tức</h2>
          <div className="blog-list">
            <div className="blog-item">
              <img src="path-to-image.jpg" alt="Tips" className="blog-img" />
              <h3 className="blog-heading">5 Mẹo tiết kiệm chi phí thuê trọ</h3>
              <p className="blog-desc">
                Bạn có biết cách nào để giảm bớt chi phí khi thuê phòng không?
                Xem ngay bài viết này để biết thêm chi tiết!
              </p>
              <a
                href="https://venturefestbristolandbath.com/meo-tiet-kiem-chi-phi-khi-o-nha-tro-cho-sinh-vien/"
                className="btn-grad"
              >
                Đọc tiếp
              </a>
            </div>
            <div className="blog-item">
              <img src="path-to-image.jpg" alt="Guide" className="blog-img" />
              <h3 className="blog-heading">Hướng dẫn chọn phòng trọ phù hợp</h3>
              <p className="blog-desc">
                Những yếu tố quan trọng cần lưu ý khi tìm kiếm một nơi ở an toàn
                và thoải mái.
              </p>
              <a
                href="https://ttttlease.com/kinh-nghiem-thue-phong-tro-cho-sinh-vien/"
                className="btn-grad"
              >
                Đọc tiếp
              </a>
            </div>
          </div>
        </div>

        <div className="faq-section">
          <h2 className="faq-title">Câu hỏi thường gặp</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3 className="faq-question">Làm thế nào để đặt phòng?</h3>
              <p className="faq-answer">
                Bạn có thể đặt phòng trực tiếp trên website hoặc liên hệ qua số
                hotline của chúng tôi để được hỗ trợ.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">
                Phương thức thanh toán như thế nào?
              </h3>
              <p className="faq-answer">
                Chúng tôi hỗ trợ nhiều phương thức thanh toán bao gồm tiền mặt,
                chuyển khoản, và ví điện tử.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">
                Phòng trọ có được phép nuôi thú cưng không?
              </h3>
              <p className="faq-answer">
                Một số phòng cho phép nuôi thú cưng, vui lòng kiểm tra thông tin
                chi tiết trước khi đặt phòng.
              </p>
            </div>
          </div>
        </div>

        <div className="partners-section">
          <h2 className="partners-title">Đối tác của chúng tôi</h2>
          <div className="partners-list">
            <p className="no-partners">
              Hiện tại chúng tôi đang làm việc với nhiều đối tác uy tín. Thông
              tin sẽ được cập nhật sớm!
            </p>
            <img
              src="placeholder-image.jpg"
              alt="Đang cập nhật"
              className="placeholder-image"
            />
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
                  Chúng tôi rất hân hạnh được hỗ trợ bạn, hãy để lại thông tin
                  liên lạc cho chúng tôi nhé, yêu cầu của bạn sẽ được xử lý và
                  phản hồi sớm nhất
                </p>
              </div>
              <div className="submit-info">
                <div className="row">
                  <div className="item">
                    <label htmlFor="customerName">
                      Họ và tên &nbsp;<strong className="strong">*</strong>{" "}
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      id="customerName"
                      onChange={createCustomerHandler}
                    />
                  </div>

                  <div className="item">
                    <label htmlFor="customerPhone">
                      Số điện thoại &nbsp;<strong className="strong">*</strong>{" "}
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="customerPhone"
                      onChange={createCustomerHandler}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="item">
                    <label htmlFor="customerEmail">
                      email &nbsp;<strong className="strong">*</strong>{" "}
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      onChange={createCustomerHandler}
                    />
                  </div>
                  <div className="item">
                    <label htmlFor="desc">Mô tả chi tiết</label>
                    <textarea
                      name="demand"
                      id="customerDesc"
                      col="5"
                      row="5"
                      onChange={createCustomerHandler}
                    ></textarea>
                  </div>
                </div>

                <div className="action">
                  <button onClick={createCustomer} className="btn-grad">
                    Gửi
                  </button>
                </div>

                {/* <div class="contact-manager">
                  <p class="desc">Hoặc liên hệ qua</p>
                  <div class="list-icon">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      class="font-icon"
                    >
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a
                      href="https://zalo.me"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/assets/img/index-img/zalo_icon.png"
                        alt="Zalo"
                        className="zalo-icon"
                      />
                    </a>

                    <a
                      href="https://youtube.com"
                      target="_blank"
                      class="font-icon"
                    >
                      <i class="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                </div> */}
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
