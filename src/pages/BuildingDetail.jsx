import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/buildingDetail.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { api } from "../script/common";

function BuildingDetail() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentMedia, setCurrentMedia] = useState("");
  const [userRole, setUserRole] = useState(""); // Lưu vai trò người dùng
  const [building, setBuilding] = useState({
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
    images: [],
  });

  const lastTap = useRef(0); // Dùng useRef để lưu thời gian của lần nhấn trước đó
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.id;

  useEffect(() => {
    // Lấy vai trò từ localStorage
    const role = localStorage.getItem("role");
    setUserRole(role);

    // Lấy thông tin tòa nhà từ API
    if (id) {
      axios
        .get(`${api}/building?id=${id}`)
        .then((resp) => {
          setBuilding(resp.data[0]);
        })
        .catch((err) => console.error("Error fetching building details:", err));
    }
  }, [id]);

  const handleDoubleTap = (media) => {
    const currentTime = new Date().getTime();
    const tapGap = currentTime - lastTap.current;

    if (tapGap < 300 && tapGap > 0) {
      // Double-tap detected
      setCurrentMedia(media);
      setIsPopupOpen(true);
    }

    lastTap.current = currentTime; // Cập nhật thời gian nhấn
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setCurrentMedia("");
  };

  const navigateToBuildingEditPage = (id) => {
    navigate("/building-edit", { state: { id } });
  };

  const handleDeleteBuilding = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa tòa nhà này không?")) {
      axios
        .delete(`${api}/building/${id}`)
        .then(() => {
          alert("Tòa nhà đã được xóa thành công!");
          navigate("/building-search");
        })
        .catch((err) => {
          console.error(
            "Error deleting building:",
            err.response?.data || err.message
          );
          alert("Đã xảy ra lỗi khi xóa tòa nhà! Vui lòng thử lại sau.");
        });
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      <Header />
      <div className="detail">
        <div className="main-content">
          <div className="body">
            <div className="slide">
              <Slider {...sliderSettings}>
                {building.images &&
                  building.images.map((image, idx) => {
                    const fileType = image.substring(image.lastIndexOf("."));
                    return (
                      <div key={idx} onClick={() => handleDoubleTap(image)}>
                        {fileType.localeCompare(".mp4") === 0 ? (
                          <video className="slide-content" controls>
                            <source
                              src={`${api}/image/display-image-vid?filename=${image}`}
                              type="video/mp4"
                            />
                          </video>
                        ) : (
                          <img
                            className="slide-content"
                            src={`${api}/image/display-image-vid?filename=${image}`}
                            alt="Building"
                          />
                        )}
                      </div>
                    );
                  })}
              </Slider>

              {/* Popup */}
              {isPopupOpen && (
                <div className="popup-overlay" onClick={closePopup}>
                  <div
                    className="popup-content"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {currentMedia.endsWith(".mp4") ? (
                      <video controls>
                        <source
                          src={`${api}/image/display-image-vid?filename=${currentMedia}`}
                          type="video/mp4"
                        />
                      </video>
                    ) : (
                      <img
                        src={`${api}/image/display-image-vid?filename=${currentMedia}`}
                        alt="Expanded Media"
                      />
                    )}
                  </div>
                  <button className="popup-close-button" onClick={closePopup}>
                    Đóng
                  </button>
                </div>
              )}
            </div>

            <div className="detail-content">
              <div className="-detail-common">
                <h2 className="detail-title">
                  Thông tin bất động sản
                  {userRole === "ADMIN" && (
                    <>
                      <button
                        className="btn-edit"
                        onClick={() => navigateToBuildingEditPage(building.id)}
                      >
                        <i className="fa-solid fa-pen-to-square edit-building"></i>
                      </button>
                      <button
                        className="btn-delete"
                        onClick={() => handleDeleteBuilding(building.id)}
                      >
                        <i className="fa-solid fa-trash delete-building"></i>
                      </button>
                    </>
                  )}
                </h2>
                <h3 className="name">Tên: {building.name}</h3>

                <p>
                  Địa chỉ:{" "}
                  {`${building.street}, ${building.ward}, ${building.district}`}
                </p>
              </div>

              <div className="characteristic">
                <h3 className="title-block">Chi tiết</h3>
                <div className="list-item">
                  <p>Diện tích: {building.floorArea} m²</p>
                  <p>Quản lý: {building.managerName}</p>
                  <p>SĐT quản lý: {building.managerphone}</p>
                  <p>Số phòng trống: {building.totalNumberOfAvailableRooms}</p>
                </div>
              </div>

              <div className="characteristic">
                <h3 className="title-block">Chi phí</h3>
                <div className="list-item">
                  <p>Giá thuê: {building.rentPrice} triệu/tháng</p>
                  <p>Phí dịch vụ: {building.servicefee} nghìn</p>
                  <p>Phí ô tô: {building.carfee} nghìn</p>
                  <p>Phí xe máy: {building.motofee} nghìn</p>
                  <p>Phí nước: {building.waterfee} nghìn</p>
                  <p>Phí điện: {building.electricityfee} nghìn</p>
                  <p>Tiền cọc: {building.deposit}</p>
                </div>
              </div>

              <div className="characteristic">
                <h3 className="title-block">Mô tả</h3>
                <p>{building.description}</p>
              </div>

              {/* Zalo Icon */}
              <div className="zalo-contact">
                <a
                  href="https://zalo.me/0909437393"
                  target="_blank"
                  rel="noreferrer"
                  className="zalo-link"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/906/906377.png"
                    alt="Zalo"
                    style={{ width: "40px", height: "40px" }}
                  />
                  Liên hệ qua Zalo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BuildingDetail;
