import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/footer.css'
import cash from '../assets/img/index-img/pay/payment-removebg-preview.png';
import momo from '../assets/img/index-img/pay/momo_icon_square_pinkbg.svg';
import ShopeePay from '../assets/img/index-img/pay/Logo-ShopeePay-V.webp';
import Bank from '../assets/img/index-img/pay/icons8-bank-48.png';
import ZaloPay from '../assets/img/index-img/pay/Logo FA-14.png';

function Footer() {
  return (
    <footer class="footer">
        <div class="main-content">
            <div class="body">
                <div class="column">
                    <div class="title">
                        <h2>NHATROGIARESAIGON</h2>
                    </div>
                    <div class="footer-item">
                        <div class="icon">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <p class="info">106 Đường số 4, Phường 7, Quận 8, TP.HCM</p>
                    </div>
    
                    <div class="footer-item">
                        <div class="icon">
                            <i class="fa-solid fa-phone"></i>
                        </div>
                        <a href="https://zalo.me/0909437393" target="_blank" className="info">0909.437.393</a>
                    </div>
    
                    <div class="footer-item">
                        <div class="icon">
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                        <a href="mailto:nguyenminhchung437393@gmail.com" target="_blank" className="info">
                            nguyenminhchung437393@gmail.com
                        </a>
                    </div>
                </div>

                <div class="column">
                    <div class="title">
                        <h2>VỀ CHÚNG TÔI</h2>
                    </div>
                    <div class="footer-item">
                        <Link to="../home#introduction" className="item">Giới thiệu</Link>
                    </div>

                    <div class="footer-item">
                        <Link to="../sercurity-policy" className="item">Chính sách bảo mật</Link>

                    </div>

                    <div class="footer-item">
                        {/* <a href="#contact" class="info">Liên hệ</a> */}
                        <Link to="../home#contact" className="item">Liên hệ</Link>
                    </div>
                </div>

                <div class="column">
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

                <div class="column">
                    <div class="title">
                        <h2>PHƯƠNG THỨC THANH TOÁN</h2>
                    </div>
                    <div class="footer-item">
                        <img src={cash} alt="" className="img-pay" title="tiền mặt"/>
                        <img src={momo} alt="" className="img-pay" title="Momo Pay"/>
                        <img src={ShopeePay} alt="" className="img-pay" title="Shopee Pay"/>
                        <img src={Bank} alt="" className="img-pay" title="Bank"/>
                        <img src={ZaloPay} alt="" className="img-pay" title="Zalo Pay"/>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer
