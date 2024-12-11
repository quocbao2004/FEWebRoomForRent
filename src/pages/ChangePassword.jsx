import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { api } from "../script/common";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ChangePassword() {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "ADMIN") {
      navigate("/unauthorized"); // Chuyển hướng nếu không phải ADMIN
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    id: "",
    username: "",
    password: "",
    newPassword: "",
    retypePassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };

  //lấy thông tin admin
  useEffect(function () {
    let token = localStorage.getItem("token");
    axios.interceptors.request.use(
      (config) => {
        config.headers.Authorization = "Bearer " + token;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    axios
      .get(api + "/users/get-user?id=2")
      .then((user) => {
        setFormData(user.data);
        console.log(user.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("ERR");
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);

    //lấy token
    let token = localStorage.getItem("token");

    // add token vào request
    axios.interceptors.request.use(
      (config) => {
        config.headers.Authorization = "Bearer " + token;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    //gửi request về server
    axios
      .post(api + "/users/change-password", formData)
      .then(() => {
        console.log("OK");
      })
      .catch((err) => {
        console.log(err);
        console.log("ERR");
      });
  };

  //---------------------------------------------------------------------------------------------------------------

  return (
    <div>
      <Header />
      <div className="edit-profile">
        <div className="main-content">
          <div className="body">
            <h1 className="title">Đổi mật khẩu</h1>
            <form onSubmit={handleSubmit}>
              <label>
                Username
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </label>
              <label>
                Mật khẩu cũ
                <input
                  type="password"
                  name="oldPassword"
                  // value={formData.password}
                  onChange={handleChange}
                />
              </label>
              <label>
                Mật khẩu mới
                <input
                  type="password"
                  name="newPassword"
                  onChange={handleChange}
                />
              </label>
              <label>
                Nhập lại mật khẩu mới
                <input
                  type="password"
                  name="retypePassword"
                  onChange={handleChange}
                />
              </label>

              <div className="action">
                <button type="submit" className="btn-submit">
                  Lưu thay đổi
                </button>

                <button className="btn-submit">
                  <Link className="cancel" to="../edit-profile">
                    Quay lại
                  </Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ChangePassword;
