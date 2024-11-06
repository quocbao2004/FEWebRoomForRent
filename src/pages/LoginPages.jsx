// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import { useState } from "react";  // Import useState
// import '../assets/css/loginPages.css';
// import logo from '../assets/img/index-img/NHA_TRO_NGUYEN_KHANG-removebg-preview.png';

// function LoginPages({ api }) {
//     const navigate = useNavigate();

//     // Sử dụng useState để quản lý trạng thái
//     const [userData, setUserData] = useState({
//         phone: "",
//         password: ""
//     });
//     const [errorMessage, setErrorMessage] = useState(""); // Thêm trạng thái lỗi

//     function loginBtnHandler(e) {
//         e.preventDefault(); // Ngăn chặn hành động mặc định của form

//         const userLogin = {
//             phone: userData.phone,
//             password: userData.password
//         };

//         // Gửi yêu cầu đăng nhập
//         axios.post(api + "/users/login", userLogin)
//             .then(function (resp) {
//                 localStorage.setItem("token", resp.data);
//                 navigate('/home'); // Dẫn tới trang home
//             })
//             .catch(function (err) {
//                 console.log(err);
//                 setErrorMessage("Đăng nhập không thành công. Vui lòng kiểm tra lại số điện thoại và mật khẩu."); // Hiển thị thông báo lỗi
//             });
//     }

//     function handleChange(e) {
//         setUserData({ ...userData, [e.target.name]: e.target.value }); // Cập nhật trạng thái đúng cách
//     }

//     return (
//         <>
//             <div className="login">
//                 <div className="body">
//                     <div className="back">
//                         <Link to="../home">
//                             <img src={logo} alt="Nhà trọ giá rẻ Sài Gòn" className="logo" />
//                         </Link>
//                         <Link to="../home" className="backToHome">
//                             Trang chủ
//                         </Link>
//                     </div>
//                     <div className="wrapper">
//                         {/* Đã thêm onSubmit cho form */}
//                         <form onSubmit={loginBtnHandler}>
//                             <h1>Login</h1>
//                             {/* Nhớ gắn tên trường cho phù hợp với dữ liệu */}
//                             <div className="input-box">
//                                 <input
//                                     type="text"
//                                     name="phone" // Gắn tên trường đúng
//                                     placeholder="Phone number" // Thay đổi thành 'Phone number'
//                                     required
//                                     onChange={handleChange}
//                                 />
//                                 <i className='bx bxs-user'></i>
//                             </div>
//                             <div className="input-box">
//                                 <input
//                                     type="password"
//                                     name="password" // Gắn tên trường đúng
//                                     placeholder="Password"
//                                     required
//                                     onChange={handleChange}
//                                 />
//                                 <i className='bx bxs-lock-alt'></i>
//                             </div>
//                             <div className="remember-forgot">
//                                 <label><input type="checkbox" />Remember Me</label>
//                                 <a href="#">Forgot Password</a>
//                             </div>
//                             <button type="submit" className="btn">Login</button>
//                         </form>
//                         {/* Hiển thị thông báo lỗi nếu có */}
//                         {errorMessage && <p className="error">{errorMessage}</p>}
//                     </div>
//                 </div>
//             </div>
//             {/* <Footer /> */}
//         </>
//     );
// }

// export default LoginPages;
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../assets/css/loginPages.css";
import logo from "../assets/img/index-img/NHA_TRO_NGUYEN_KHANG-removebg-preview.png";

function LoginPages({ useRefAPI }) {
  const naviagte = useNavigate();
  let apiRef = useRefAPI.current;

  let userData = {
    phone: "",
    password: "",
  };

  function loginBtnHandler(e) {
    e.preventDefault();
    const userLogin = {
      phone: userData.phone,
      password: userData.password,
    };

    axios
      .post(apiRef + "/users/login", userLogin)
      .then(function (resp) {
        localStorage.setItem("token", resp.data);
        naviagte("/home");
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  function handleChange(e) {
    userData = { ...userData, [e.target.name]: e.target.value };
  }

  return (
    // <form action="">
    //     <label htmlFor="phone">Phone number</label>
    //     <input type="text" name="phone" id="phone" onChange={handleChange}/>
    //     <label htmlFor="password">Password</label>
    //     <input type="password" name="password" id="password" onChange={handleChange}/>
    //     <button onClick={loginBtnHandler}>Login</button>
    // </form>
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
                <input
                  type="text"
                  name="phone"
                  placeholder="Username"
                  required
                  onChange={handleChange}
                />
                <i class="bx bxs-user"></i>
              </div>
              <div class="input-box">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={handleChange}
                />
                <i class="bx bxs-lock-alt"></i>
              </div>
              <div class="remember-forgot">
                <label>
                  <input type="checkbox" />
                  Remember Me
                </label>
                <a href="#">Forgot Password</a>
              </div>
              <button type="submit" class="btn" onClick={loginBtnHandler}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default LoginPages;
