import axios from "axios";

function LoginService(e, userData, api) {
    e.preventDefault();
    
    const userLogin = {
        phone: userData.phone,
        password: userData.password
    };

    axios.post(api + "/users/login", userLogin)
        .then(function (resp) {
            console.log("Token: ", resp);
        })
        .catch(function(err) {
            console.log(err);
        }) 
}

export default LoginService;