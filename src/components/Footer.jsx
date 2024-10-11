import React from 'react'

function Footer() {
  return (
    // <div class="h"></div>
    <footer class="footer">
        <div class="main-content">
            <div class="body">
                <div class="row">
                    <div class="title">
                        <h2>NHATROGIARESAIGON.COM.VN</h2>
                    </div>
                    <div class="footer-item">
                        <div class="icon">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <p class="info">32. Đường E, Phường 7, Quận 8, Thành phố Hồ Chí Minh</p>
                    </div>
    
                    <div class="footer-item">
                        <div class="icon">
                            <i class="fa-solid fa-phone"></i>
                        </div>
                        <p class="info">0865.479.500</p>
                    </div>
    
                    <div class="footer-item">
                        <div class="icon">
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                        <p class="info">daoquocbao2k04@gmail.com</p>
                    </div>
                </div>

                <div class="row">
                    <div class="title">
                        <h2>VỀ CHÚNG TÔI</h2>
                    </div>
                    <div class="footer-item">
                        <a href="#" class="info">Giới thiệu</a>
                    </div>

                    <div class="footer-item">
                        <a href="#" class="info">Chính sách bảo mật</a>
                    </div>

                    <div class="footer-item">
                        <a href="#" class="info">Liên hệ</a>
                    </div>
                </div>

                <div class="row">
                    <div class="title">
                        <h2>THÔNG TIN</h2>
                    </div>

                    <div class="footer-item">
                        <a href="#" class="info">Bảng giá dịch vụ</a>
                    </div>

                    <div class="footer-item">
                        <a href="#" class="info">Tin tức</a>
                    </div>
                </div>

                <div class="row">
                    <div class="title">
                        <h2>PHƯƠNG THỨC THANH TOÁN</h2>
                    </div>
                    <img src="./assets/img/index-img/phuong-thuc-thanh-toan-final.png" alt=""  class="payment"/>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer
