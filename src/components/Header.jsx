import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/header.css'
import logo from '../assets/img/index-img/NHA_TRO_NGUYEN_KHANG-removebg-preview.png';

function Header() {

  return (
    <header class="header fixed">
        <div class="main-content">
            <div class="body">
                {/* <!-- Logo --> */}
                <Link to="../home">
                    <img src={logo} alt="Nhà trọ giá rẻ Sài Gòn" className="logo" />
                </Link>
                {/* <!-- Nav --> */}
                    <nav class="nav">
                        <ul>
                            <li class="active">
                                <Link to="../home" className="item">
                                    Trang chủ
                               </Link>
                            </li>
                            <li class="active">
                                <a href="#!" class="item">Cho thuê phòng trọ</a>
                            </li>
                            <li class="active">
                                <a href="#!" class="item">Cho thuê nhà nguyên căn</a>
                            </li>
                            <li class="active">
                                <a href="#!" class="item">Liên hệ</a>
                            </li>
                        </ul>
                    </nav> 
                {/* <!-- Login --> */}
                <div class="action">
                    <a href="#!" class="btn sign-up-btn">Đăng nhập</a>
                </div>

                <button class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header
