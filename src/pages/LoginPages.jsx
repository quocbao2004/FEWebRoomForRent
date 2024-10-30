import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import '../assets/css/loginPages.css';
import logo from '../assets/img/index-img/NHA_TRO_NGUYEN_KHANG-removebg-preview.png'

function LoginPages({ useRefAPI }) {
    const naviagte = useNavigate();
    let apiRef = useRefAPI.current;

    let userData = {
        phone: "",
        password: ""
    };

    function loginBtnHandler(e) {
        e.preventDefault();

        const userLogin = {
            phone: userData.phone,
            password: userData.password
        };

        axios.post(apiRef + "/users/login", userLogin)
            .then(function (resp) {
                localStorage.setItem("token", resp.data);
                naviagte('/home');
            })
            .catch(function (err) {
                console.log(err);
            })
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
                            <img src ={logo} alt="Nhà trọ giá rẻ Sài Gòn" className="logo" />
                        </Link>

                        <Link to="../home" className="backToHome">
                            Trang chủ
                        </Link>
                    </div>
                    <div class="wrapper">
                        <form action="">
                            <h1>Login</h1>
                            <div class="input-box">
                                <input type="text" name="phone" placeholder="Username" required onChange={handleChange}/>
                                <i class='bx bxs-user'></i>
                            </div>
                            <div class="input-box">
                                <input type="password" name="password" placeholder="Password" required onChange={handleChange}/>
                                <i class='bx bxs-lock-alt' ></i>
                            </div>
                            <div class="remember-forgot">
                                <label><input type="checkbox" />Remember Me</label>
                                <a href="#">Forgot Password</a>
                            </div>
                            <button type="submit" class="btn" onClick={loginBtnHandler}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default LoginPages;