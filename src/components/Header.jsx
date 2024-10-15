import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header class="header fixed">
        <div class="main-content">
            <div class="body">
                {/* <!-- Logo --> */}
                <a href="#">
                    <img src="./assets/img/index-img/NHA_TRO_NGUYEN_KHANG-removebg-preview.png" alt="Nhà trọ giá rẻ sài gòn" class="logo"/>
                </a>

                {/* <!-- Nav --> */}
                <nav class="nav">
                    <ul>
                        <li class="active">
                            <a href="#!" class="item">Trang chủ</a>
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
                    <Link to='/login' class="btn sign-up-btn">Đăng nhập</Link>
                </div>

                <div class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
