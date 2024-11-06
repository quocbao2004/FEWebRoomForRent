import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "../assets/css/buildingEditPage.css";

function BuildingEditPages({ api }) {
  const navigator = useNavigate();
  const location = useLocation();

  if (localStorage.getItem("token") == null) navigator("/");

  const [image, setImage] = useState(null);
  const districts = [
    "Quận 1",
    "Quận 3",
    "Quận 4",
    "Quận 5",
    "Quận 6",
    "Quận 7",
    "Quận 8",
    "Quận 10",
    "Quận 11",
    "Quận 12",
    "Quận Bình Thạnh",
    "Quận Tân Bình",
    "Quận Tân Phú",
    "Quận Phú Nhuận",
    "Huyện Bình Chánh",
    "Thành Phố Thủ Đức",
    "Quận Bình Tân",
    "Quận Gò Vấp",
    "Huyện Cần Giờ",
    "Huyện Củ Chi",
    "Huyện Hóc Môn",
    "Huyện Nhà Bè",
  ];
  const [building, setBuilding] = useState({
    name: "",
    id: null,
    ward: "",
    type: "",
    district: "",
    street: "",
    floorArea: null,
    managerName: "",
    managerphone: "",
    rentPrice: null,
    servicefee: null,
    carfee: null,
    motofee: null,
    waterfee: null,
    electricityfee: null,
    deposit: "",
    totalNumberOfAvailableRooms: null,
    description: "",
    images: null,
  });

  // const id = location.state.id;
  const id = 1;
  useEffect(() => {
    axios
      .get(api + "/building?id=" + id)
      .then((resp) => {
        setBuilding(resp.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  function deleteImage(fileName) {
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    axios
      .delete(api + "/image/" + fileName, config)
      .then(
        axios
          .get(api + "/building?fileName=" + fileName)
          .then(console.log("Delete image successful"))
          .catch((err) => console.log(err))
      )
      .catch((err) => console.log(err));
  }

  function addImage(e) {
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
    const fd = new FormData();
    fd.append("files", image);

    axios
      .post(api + "/image/upload-images-vids/" + id, fd)
      .then(navigator("/building-edit", { state: { id: id } }))
      .catch((err) => console.log(err));
  }

  return (
    <div id={building.id}>
      <Header />
      <div className="post-room">
        <div className="main-content">
          <h1>Trang đăng tin</h1>
          <div className="body">
            <div className="info">
              <h2 className="title">Thông tin</h2>
              <div className="row">
                <div className="item">
                  <label htmlFor="name">
                    Tên phòng trọ &nbsp;<strong className="strong">*</strong>{" "}
                  </label>
                  <input type="text" name="name" id="name" />
                </div>

                <div className="item">
                  <label htmlFor="type">
                    Loại&nbsp;<strong className="strong">*</strong>{" "}
                  </label>
                  <select name="type" id="type" defaultValue="">
                    <option value="">Chọn loại nhà</option>
                    <option value="Nguyên căn">Nguyên căn</option>
                    <option value="Phòng trọ">Phòng trọ</option>
                    <option value="Phòng trọ">Kho</option>
                    <option value="Phòng trọ">Đất</option>
                  </select>
                </div>

                <div className="item">
                  <label htmlFor="floorArea">
                    Diện tích&nbsp;<strong className="strong">*</strong>{" "}
                  </label>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input type="number" name="floorArea" id="floorArea" />
                    <span className="metvuong">m²</span>
                  </div>
                </div>

                <div className="item">
                  <label htmlFor="totalNumberOfAvailableRooms">
                    Số phòng trống
                  </label>
                  <input
                    type="number"
                    name="totalNumberOfAvailableRooms"
                    id="totalNumberOfAvailableRooms"
                  />
                </div>
              </div>

              <div className="row">
                <div className="item">
                  <label htmlFor="street">
                    Đường&nbsp;<strong className="strong">*</strong>{" "}
                  </label>
                  <input type="text" name="street" id="street" />
                </div>
                <div className="item">
                  <label htmlFor="ward">
                    Phường&nbsp;<strong className="strong">*</strong>{" "}
                  </label>
                  <input type="text" name="ward" id="ward" />
                </div>

                <div className="item">
                  <form>
                    <label htmlFor="district">
                      Quận&nbsp;<strong className="strong">*</strong>{" "}
                    </label>
                    <select name="district" id="district" defaultValue="">
                      <option value="">Chọn quận</option>
                      {districts.map((district, index) => (
                        <option key={index} value={district}>
                          {district}
                        </option>
                      ))}
                    </select>
                    {/* Các phần khác của form */}
                  </form>
                </div>
              </div>

              <div className="row">
                <div className="item">
                  <label htmlFor="desc">Mô tả chi tiết</label>
                  <textarea
                    name="desc"
                    id="desc"
                    rows="500"
                    cols="500"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="info">
              <h2 className="title">Thông tin chủ cho thuê</h2>
              <div className="row">
                <div className="item">
                  <label htmlFor="managerName">
                    Tên chủ cho thuê &nbsp;<strong className="strong">*</strong>{" "}
                  </label>
                  <input type="text" name="managerName" id="managerName" />
                </div>
                <div className="item">
                  <label htmlFor="managerphone">
                    Số điện thoại chủ cho thuê &nbsp;
                    <strong className="strong">*</strong>{" "}
                  </label>
                  <input type="text" name="managerphone" id="managerphone" />
                </div>
              </div>
            </div>

            <div className="info">
              <h2 className="title">Các khoản phí</h2>
              <div className="row">
                <div className="item">
                  <label htmlFor="rentPrice">
                    Giá thuê &nbsp;<strong className="strong">*</strong>{" "}
                  </label>
                  <input type="number" name="rentPrice" id="rentPrice" />
                </div>
                <div className="item">
                  <label htmlFor="servicefee">
                    Phí dịch vụ &nbsp;<strong className="strong">*</strong>{" "}
                  </label>
                  <input type="number" name="servicefee" id="servicefee" />
                </div>

                <div className="item">
                  <label htmlFor="carfee">
                    Phí ô tô &nbsp;<strong className="strong">*</strong>{" "}
                  </label>
                  <input type="number" name="carfee" id="carfee" />
                </div>
                <div className="item">
                  <label htmlFor="motofee">
                    Phí xe máy &nbsp;<strong className="strong">*</strong>{" "}
                  </label>
                  <input type="number" name="motofee" id="motofee" />
                </div>
              </div>

              <div className="row">
                <div className="item">
                  <label htmlFor="waterfee">
                    Nước &nbsp;<strong className="strong">*</strong>{" "}
                  </label>
                  <input type="number" name="waterfee" id="waterfee" />
                </div>
                <div className="item">
                  <label htmlFor="electricityfee">
                    Điện &nbsp;<strong className="strong">*</strong>{" "}
                  </label>
                  <input
                    type="number"
                    name="electricityfee"
                    id="electricityfee"
                  />
                </div>
                <div className="item">
                  <label htmlFor="deposit">
                    Tiền cọc &nbsp;<strong className="strong">*</strong>{" "}
                  </label>
                  <input type="number" name="deposit" id="deposit" />
                </div>
              </div>
            </div>
            <div className="info">
              <div className="row">
                <div className="item">
                  <label htmlFor="images">
                    Ảnh &nbsp;<strong className="strong">*</strong>{" "}
                  </label>
                  <input type="file" name="images" id="images" />
                </div>
              </div>
            </div>

            <div class="action">
              <a href="#!" className="btn-grad">
                Đăng bài
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default BuildingEditPages;
