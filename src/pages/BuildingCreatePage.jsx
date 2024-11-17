import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/css/buildingEditPage.css";

function BuildingCreatePage({ api }) {
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

  const building = {
    id: null,
    name: "",
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
  };
  const navigator = useNavigate();

  function createBuildingBtnHandler(api, building) {
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
      .post(api + "/building", building)
      .then((resp) => {
        let buildingId = resp.data.id;
        console.log(building.images);
        for (let it of building.images) {
          const fd = new FormData();
          fd.append("files", it);
          axios
            .post(api + "/image/upload-images-vids/" + buildingId, fd)
            .then(() => navigator("/building-search"))
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
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
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={(e) => (building.name = e.target.value)}
                  />
                </div>

                <div className="item">
                  <label htmlFor="type">
                    Loại&nbsp;<strong className="strong">*</strong>{" "}
                  </label>
                  <select
                    name="type"
                    id="type"
                    defaultValue=""
                    onChange={(e) => (building.type = e.target.value)}
                  >
                    <option value="NGUYEN_CAN">Chọn loại nhà</option>
                    <option value="NGUYEN_CAN">Nguyên căn</option>
                    <option value="PHONG_TRO">Phòng trọ</option>
                    <option value="KHO">Kho</option>
                    <option value="DAT">Đất</option>
                  </select>
                </div>

                <div className="item">
                  <label htmlFor="floorArea">
                    Diện tích&nbsp;<strong className="strong">*</strong>{" "}
                  </label>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      type="number"
                      name="floorArea"
                      id="floorArea"
                      onChange={(e) => (building.floorArea = e.target.value)}
                    />
                    <span className="metvuong">m²</span>
                  </div>
                </div>

                <div className="item">
                  <label htmlFor="totalNumberOfAvailableRooms">
                    Số phòng trống
                  </label>
                  <input
                    onChange={(e) =>
                      (building.totalNumberOfAvailableRooms = e.target.value)
                    }
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
                  <input
                    type="text"
                    name="street"
                    id="street"
                    onChange={(e) => (building.street = e.target.value)}
                  />
                </div>
                <div className="item">
                  <label htmlFor="ward">
                    Phường&nbsp;<strong className="strong">*</strong>{" "}
                  </label>
                  <input
                    type="text"
                    name="ward"
                    id="ward"
                    onChange={(e) => (building.ward = e.target.value)}
                  />
                </div>

                <div className="item">
                  <form>
                    <label htmlFor="district">
                      Quận&nbsp;<strong className="strong">*</strong>{" "}
                    </label>
                    <select
                      name="district"
                      id="district"
                      defaultValue=""
                      onChange={(e) => (building.district = e.target.value)}
                    >
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
                  <label htmlFor="description">Mô tả chi tiết</label>
                  <textarea
                    name="description"
                    id="desc"
                    rows="500"
                    cols="500"
                    onChange={(e) => (building.description = e.target.value)}
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
                  <input
                    type="text"
                    name="managerName"
                    id="managerName"
                    onChange={(e) => (building.managerName = e.target.value)}
                  />
                </div>
                <div className="item">
                  <label htmlFor="managerphone">
                    Số điện thoại chủ cho thuê &nbsp;
                    <strong className="strong">*</strong>{" "}
                  </label>
                  <input
                    type="text"
                    name="managerphone"
                    id="managerphone"
                    onChange={(e) => (building.managerPhone = e.target.value)}
                  />
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
                  <input
                    type="number"
                    name="rentPrice"
                    id="rentPrice"
                    onChange={(e) => (building.rentPrice = e.target.value)}
                  />
                </div>
                <div className="item">
                  <label htmlFor="servicefee">
                    Phí dịch vụ &nbsp;<strong className="strong">*</strong>{" "}
                  </label>
                  <input
                    type="number"
                    name="servicefee"
                    id="servicefee"
                    onChange={(e) => (building.servicefee = e.target.value)}
                  />
                </div>

                <div className="item">
                  <label htmlFor="carfee">
                    Phí ô tô &nbsp;<strong className="strong">*</strong>{" "}
                  </label>
                  <input
                    type="number"
                    name="carfee"
                    id="carfee"
                    onChange={(e) => (building.carfee = e.target.value)}
                  />
                </div>
                <div className="item">
                  <label htmlFor="motofee">
                    Phí xe máy &nbsp;<strong className="strong">*</strong>{" "}
                  </label>
                  <input
                    type="number"
                    name="motofee"
                    id="motofee"
                    onChange={(e) => (building.motofee = e.target.value)}
                  />
                </div>
              </div>

              <div className="row">
                <div className="item">
                  <label htmlFor="waterfee">
                    Nước &nbsp;<strong className="strong">*</strong>{" "}
                  </label>
                  <input
                    type="number"
                    name="waterfee"
                    id="waterfee"
                    onChange={(e) => (building.waterfee = e.target.value)}
                  />
                </div>
                <div className="item">
                  <label htmlFor="electricityfee">
                    Điện &nbsp;<strong className="strong">*</strong>{" "}
                  </label>
                  <input
                    type="number"
                    name="electricityfee"
                    id="electricityfee"
                    onChange={(e) => (building.electricityfee = e.target.value)}
                  />
                </div>
                <div className="item">
                  <label htmlFor="deposit">
                    Tiền cọc &nbsp;<strong className="strong">*</strong>{" "}
                  </label>
                  <input
                    type="number"
                    name="deposit"
                    id="deposit"
                    onChange={(e) => (building.deposit = e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="info">
              <div className="row">
                <div className="item">
                  <label htmlFor="images">
                    Ảnh &nbsp;<strong className="strong">*</strong>{" "}
                  </label>
                  <input
                    type="file"
                    name="images"
                    id="images"
                    multiple="multiple"
                    onChange={(e) => (building.images = e.target.files)}
                  />
                </div>
              </div>
            </div>

            <div className="action">
              <button
                className="btn-grad"
                onClick={() => createBuildingBtnHandler(api, building)}
              >
                Đăng
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BuildingCreatePage;
