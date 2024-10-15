import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPages({ api }) {
    const naviagte = useNavigate();

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
    
        axios.post(api + "/users/login", userLogin)
            .then(function (resp) {
                localStorage.setItem("token", resp.data);
                naviagte('/building-search');
            })
            .catch(function(err) {
                console.log(err);
            }) 
    }

    function handleChange(e) {
        userData = { ...userData, [e.target.name]: e.target.value };
    }

    return (
        <form action="">
            <label htmlFor="phone">Phone number</label>
            <input type="text" name="phone" id="phone" onChange={handleChange}/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={handleChange}/>
            <button onClick={loginBtnHandler}>Login</button>
        </form>        
    )
}

export default LoginPages;