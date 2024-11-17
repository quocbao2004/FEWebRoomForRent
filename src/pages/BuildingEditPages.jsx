import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function BuildingEditPages({ useRefAPI }) {
  let newBuilding = {
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
  };
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
  const navigator = useNavigate();
  const location = useLocation();
  let newImages = null;

  if (localStorage.getItem("token") == null) navigator("/");

  let image;
  const [building, setBuilding] = useState({
    name: "",
    id: null,
    ward: "",
    type: "",
    district: "",
    street: "",
    floorArea: null,
    managerName: "",
    managerPhone: "",
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

  const id = location.state.id;
  useEffect(() => {
    axios
      .get(useRefAPI.current + "/building?id=" + id)
      .then((resp) => {
        setBuilding(resp.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  function deleteImage(fileName) {
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
      .delete(useRefAPI.current + "/image/" + fileName)
      .then(() => {
        axios
          .get(useRefAPI.current + "/building?fileName=" + fileName)
          .then(() => {
            console.log("Delete image successful");
            window.location.reload();
          })
          .catch((err) => console.log(err));
      })
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
      .post(useRefAPI.current + "/image/upload-images-vids/" + id, fd)
      .then(navigator("/building-edit", { state: { id: id } }))
      .catch((err) => console.log(err));
  }

  function newBuildingOnChange(e) {
    setBuilding((prevBuilding) => {
      return {
        ...prevBuilding,
        [e.target.name]: e.target.value,
      };
    });
    const { name, value } = e.target;
    newBuilding = { ...newBuilding, [name]: value };
  }

  function confirmEditHandler() {
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
      .post(useRefAPI.current + "/building", building)
      .then((resp) => {
        let buildingId = resp.data.id;

        if (newImages) {
          for (let it of newImages) {
            const fd = new FormData();
            fd.append("files", it);
            axios
              .post(
                useRefAPI.current + "/image/upload-images-vids/" + buildingId,
                fd
              )
              .then(navigator("/building-edit", { state: { id: id } }))
              .catch((err) => console.log(err));
          }
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div id={building.id}>
      <Header />
      <div className="post-room">
        <div className="main-content">
          <h1>Chỉnh sửa hồ sơ bất động sản</h1>
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
                    value={building.name}
                    onChange={newBuildingOnChange}
                  />
                </div>

                <div className="item">
                  <label htmlFor="type">
                    Loại&nbsp;<strong className="strong">*</strong>{" "}
                  </label>
                  <select
                    name="type"
                    id="type"
                    // onChange={(e) => (building.type = e.target.value)}
                    onChange={newBuildingOnChange}
                    value={building.type}
                  >
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
                    <input
                      type="number"
                      name="floorArea"
                      id="floorArea"
                      value={building.floorArea}
                      onChange={newBuildingOnChange}
                    />
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
                    value={building.totalNumberOfAvailableRooms}
                    onChange={newBuildingOnChange}
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
                    onChange={newBuildingOnChange}
                    value={building.street}
                  />
                </div>
                <div className="item">
                  <label htmlFor="ward">
                    Phường&nbsp;<strong className="strong">*</strong>{" "}
                  </label>
                  <input
                    type="text"
                    onChange={newBuildingOnChange}
                    name="ward"
                    id="ward"
                    value={building.ward}
                  />
                </div>

                <div className="item">
                  <form>
                    <label htmlFor="district">
                      Quận&nbsp;<strong className="strong">*</strong>{" "}
                    </label>
                    <select
                      name="district"
                      onChange={newBuildingOnChange}
                      id="district"
                      defaultValue=""
                      value={building.district}
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
                    onChange={newBuildingOnChange}
                    id="desc"
                    rows="500"
                    cols="500"
                    value={building.description}
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
                    value={building.managerName}
                    onChange={newBuildingOnChange}
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
                    value={building.managerPhone}
                    onChange={newBuildingOnChange}
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
                    value={building.rentPrice}
                    onChange={newBuildingOnChange}
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
                    value={building.servicefee}
                    onChange={newBuildingOnChange}
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
                    value={building.carfee}
                    onChange={newBuildingOnChange}
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
                    value={building.motofee}
                    onChange={newBuildingOnChange}
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
                    value={building.waterfee}
                    onChange={newBuildingOnChange}
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
                    value={building.electricityfee}
                    onChange={newBuildingOnChange}
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
                    value={building.deposit}
                    onChange={newBuildingOnChange}
                  />
                </div>
              </div>
            </div>
            <label htmlFor="images">
              Ảnh &nbsp;<strong className="strong">*</strong>{" "}
            </label>
            <div className="images-list">
              {building.images
                ? building.images.map((image, idx) => {
                    let lastIdxOfDot = image.lastIndexOf(".");
                    let s = image.substring(lastIdxOfDot);
                    return (
                      <div key={idx} className="images">
                        {s.localeCompare(".mp4") == 0 ? (
                          <video
                            width="750"
                            height="500"
                            controls
                            key={idx}
                            className="image"
                          >
                            <source
                              src={`http://localhost:8080/api/image/display-image-vid?filename=${image}`}
                              type="video/mp4"
                              className="image"
                            />
                          </video>
                        ) : (
                          <img
                            src={`http://localhost:8080/api/image/display-image-vid?filename=${image}`}
                            key={idx}
                            className="image"
                          />
                        )}
                        <button
                          className="btn-grad btn-delete"
                          onClick={() => deleteImage(image)}
                        >
                          Delete image
                        </button>
                      </div>
                    );
                  })
                : null}
            </div>
            <input
              type="file"
              name="images"
              id="images"
              multiple
              onChange={(e) => (newImages = e.target.files)}
            />

            <div class="action">
              <button className="btn-grad" onClick={confirmEditHandler}>
                Thay đổi
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default BuildingEditPages;
