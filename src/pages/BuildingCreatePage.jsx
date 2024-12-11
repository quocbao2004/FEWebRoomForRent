import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/css/buildingEditPage.css";
import { api } from "../script/common";

function BuildingCreatePage() {
  const navigate = useNavigate();

  // State management for building data and error messages
  const [building, setBuilding] = useState({
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
    images: [],
  });

  const [errorMessage, setErrorMessage] = useState("");

  // List of districts
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

  // Redirect if the user is not an admin
  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "ADMIN") {
      navigate("/unauthorized");
    }
  }, [navigate]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuilding((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    setBuilding((prev) => ({ ...prev, images: Array.from(e.target.files) }));
  };

  // Validate and submit the form
  const createBuildingBtnHandler = () => {
    // Validation checks
    if (
      !building.name ||
      !building.ward ||
      !building.street ||
      !building.district ||
      !building.managerName ||
      !building.managerphone ||
      !building.rentPrice ||
      !building.servicefee ||
      !building.carfee ||
      !building.motofee ||
      !building.waterfee ||
      !building.electricityfee ||
      !building.deposit ||
      !Array.isArray(building.images) ||
      building.images.length === 0
    ) {
      setErrorMessage("Vui lòng điền đầy đủ thông tin cần thiết.");
      return;
    }

    // Prepare and send the data
    let token = localStorage.getItem("token");
    if (!token) {
      setErrorMessage(
        "Authorization token is missing. Vui lòng đăng nhập lại."
      );
      return;
    }

    axios
      .post(api + "/building", building, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((resp) => {
        const buildingId = resp.data.id;

        // Upload images
        const uploadPromises = building.images.map((file) => {
          const formData = new FormData();
          formData.append("files", file);
          return axios.post(
            `${api}/image/upload-images-vids/${buildingId}`,
            formData,
            {
              headers: { Authorization: "Bearer " + token },
            }
          );
        });

        // Wait for all uploads to complete
        Promise.all(uploadPromises)
          .then(() => {
            navigate("/building-search");
          })
          .catch((err) => {
            setErrorMessage(
              "Lỗi khi tải ảnh lên: " + (err.response?.data || err.message)
            );
          });
      })
      .catch((err) => {
        setErrorMessage(
          "Lỗi khi tạo tòa nhà: " + (err.response?.data || err.message)
        );
      });
  };

  return (
    <div>
      <Header />
      <div className="post-room">
        <div className="main-content">
          <h1>Trang đăng tin</h1>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <div className="body">
            <div className="info">
              <h2 className="title">Thông tin</h2>
              <div className="row">
                <div className="item">
                  <label htmlFor="name">Tên phòng trọ *</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={building.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="item">
                  <label htmlFor="type">Loại *</label>
                  <select
                    name="type"
                    id="type"
                    value={building.type}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Chọn loại nhà
                    </option>
                    <option value="NGUYEN_CAN">Nguyên căn</option>
                    <option value="PHONG_TRO">Phòng trọ</option>
                    <option value="KHO">Kho</option>
                    <option value="DAT">Đất</option>
                  </select>
                </div>
                <div className="item">
                  <label htmlFor="district">Quận *</label>
                  <select
                    name="district"
                    id="district"
                    value={building.district}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Chọn quận
                    </option>
                    {districts.map((district, index) => (
                      <option key={index} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="item">
                  <label htmlFor="street">Đường *</label>
                  <input
                    type="text"
                    name="street"
                    id="street"
                    value={building.street}
                    onChange={handleChange}
                  />
                </div>
                <div className="item">
                  <label htmlFor="ward">Phường *</label>
                  <input
                    type="text"
                    name="ward"
                    id="ward"
                    value={building.ward}
                    onChange={handleChange}
                  />
                </div>
                <div className="item">
                  <label htmlFor="floorArea">Diện tích *</label>
                  <input
                    type="number"
                    name="floorArea"
                    id="floorArea"
                    value={building.floorArea || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="item">
                  <label htmlFor="description">Mô tả chi tiết</label>
                  <textarea
                    name="description"
                    id="description"
                    value={building.description}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="item">
                  <label htmlFor="images">Ảnh *</label>
                  <input
                    type="file"
                    id="images"
                    multiple
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </div>
            <div className="info">
              <h2 className="title">Thông tin chủ cho thuê</h2>
              <div className="row">
                <div className="item">
                  <label htmlFor="managerName">Tên chủ *</label>
                  <input
                    type="text"
                    name="managerName"
                    id="managerName"
                    value={building.managerName}
                    onChange={handleChange}
                  />
                </div>
                <div className="item">
                  <label htmlFor="managerphone">Số điện thoại *</label>
                  <input
                    type="text"
                    name="managerphone"
                    id="managerphone"
                    value={building.managerphone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="info">
              <h2 className="title">Các khoản phí</h2>
              <div className="row">
                <div className="item">
                  <label htmlFor="rentPrice">Giá thuê *</label>
                  <input
                    type="number"
                    name="rentPrice"
                    id="rentPrice"
                    value={building.rentPrice || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="item">
                  <label htmlFor="servicefee">Phí dịch vụ *</label>
                  <input
                    type="number"
                    name="servicefee"
                    id="servicefee"
                    value={building.servicefee || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="item">
                  <label htmlFor="carfee">Phí ô tô *</label>
                  <input
                    type="number"
                    name="carfee"
                    id="carfee"
                    value={building.carfee || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="item">
                  <label htmlFor="motofee">Phí xe máy *</label>
                  <input
                    type="number"
                    name="motofee"
                    id="motofee"
                    value={building.motofee || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="item">
                  <label htmlFor="waterfee">Phí nước *</label>
                  <input
                    type="number"
                    name="waterfee"
                    id="waterfee"
                    value={building.waterfee || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="item">
                  <label htmlFor="electricityfee">Phí điện *</label>
                  <input
                    type="number"
                    name="electricityfee"
                    id="electricityfee"
                    value={building.electricityfee || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="item">
                  <label htmlFor="deposit">Tiền cọc *</label>
                  <input
                    type="number"
                    name="deposit"
                    id="deposit"
                    value={building.deposit || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="action">
              <button className="btn-grad" onClick={createBuildingBtnHandler}>
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
