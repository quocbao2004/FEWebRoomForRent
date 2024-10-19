import React, { useState } from 'react';
// import LoginService from '../services/LoginService';
import axios from 'axios';
import '../assets/css/loginPages.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import logo from '../assets/img/index-img/NHA_TRO_NGUYEN_KHANG-removebg-preview.png'

function LoginPages() {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Ngăn chặn refresh trang khi submit
        try {
            const response = await axios.post('/api/login', {
                phone,
                password
            });

            // Xử lý kết quả trả về sau khi đăng nhập
            console.log(response.data);
        } catch (error) {
            console.error("Error logging in", error);
        }
    };

    return (
        <>

            <div className="login">
                <div className="body">
                    <div className="back">
                    <Link to="../home">
                        <img src={logo} alt="Nhà trọ giá rẻ Sài Gòn" className="logo" />
                    </Link>

                    <Link to="../home" className="backToHome">
                        Trang chủ
                    </Link>
                    </div>
                    <div class="wrapper">
                    <form action="">
                    <h1>Login</h1>
                    <div class="input-box">
                        <input type="text" placeholder="Username" required/>
                        <i class='bx bxs-user'></i>
                    </div>
                    <div class="input-box">
                        <input type="password" placeholder="Password" required/>
                        <i class='bx bxs-lock-alt' ></i>
                    </div>
                    <div class="remember-forgot">
                        <label><input type="checkbox"/>Remember Me</label>
                        <a href="#">Forgot Password</a>
                    </div>
                    <button type="submit" class="btn">Login</button>
                    </form>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
}

export default LoginPages;
