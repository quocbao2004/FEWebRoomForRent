import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../assets/css/buildingDetail.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useLocation } from 'react-router-dom'
import axios from 'axios'

// test img
import featured1 from '../assets/img/home-img/featured.avif';

function BuildingDetail({ api }) {

  const location = useLocation();
  const id = location.state.id;

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
    images: null
  });

  useEffect(() => {
    axios.get(api + "/building?id=" + id)
      .then(resp => {
        setBuilding(resp.data[0])
      })
      .catch(err => console.log(err))
  }, [])

  var settings = {
    dots: true, 
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  

  return (
    <div>
      <Header />
      <div className="detail">
        <div className="main-content">
          <div className="body">
            <div className="slide">
              {/* <img src={featured1} alt="" className="slide-content" /> */}
              <Slider {...settings}>
                {
                  building.images ? building.images.map((image, idx) => {
                    console.log(building.images.length);
                    
                    let lastIdxOfDot = image.lastIndexOf(".");
                    let fileType = image.substring(lastIdxOfDot);
                    return (
                      <div key={idx}>
                        {
                          fileType.localeCompare(".mp4") == 0 ?
                            <video className="slide-content" width="750" height="500" controls key={idx}>
                              <source src={`http://localhost:8080/api/image/display-image-vid?filename=${image}`} type="video/mp4" />
                            </video> :
                            <img className="slide-content" src={`http://localhost:8080/api/image/display-image-vid?filename=${image}`} key={idx} />
                        }
                      </div>
                    )
                  })
                    : null
                }
              </Slider>
            </div>

            <div className="detail-content">
              <div className="-detail-common">
                <h2 className="detail-title">Thông tin bất động sản</h2>
                <h3 className='name'>{building.name}</h3>
                <p className="title">Địa chỉ: </p>
                <p className="address">{building.street}, phường {building.ward}, quận {building.district}</p>
              </div>
              <div className="characteristic">
                <h3 className="title-block">Giá</h3>
                <div className="list-item">
                  <div className="item">
                    <p className="title">Giá phòng</p>
                    <p className="rentPrice">{building.rentPrice}tr/tháng</p>
                  </div>
                  <div className="item">
                    <p className="title">Giá điện</p>
                    <p className="electricfee">{building.electricityfee}k/kw</p>
                  </div>
                  <div className="item">
                    <p className="title">Giá nước</p>
                    <p className="waterfee">{building.waterfee}k</p>
                  </div>
                </div>
                <div className="list-item">
                  <div className="item">
                    <p className="title">Phí dịch vụ</p>
                    <p className="servicefee">{building.servicefee}k</p>
                  </div>

                  <div className="item">
                    <p className="title">Phí ô tô</p>
                    <p className="carfee">{building.carfee}k</p>
                  </div>

                  <div className="item">
                    <p className="title">Phí mô tô</p>
                    <p className="motofee">{building.motofee}k</p>
                  </div>
                </div>
              </div>
              <div className="characteristic">
                <div className="list-item">
                  <div className="item">
                    <p className="title">Diện tích</p>
                    <p className="desc">{building.floorArea}m2</p>
                  </div>
                  <div className="item">
                    <p className="title">Số phòng trống</p>
                    <p className="desc">{building.totalNumberOfAvailableRooms}</p>
                  </div>

                  <div className="item">
                    <p className="title">tiền cọc</p>
                    <p className="desc">{building.deposit}tr</p>
                  </div>
                </div>
              </div>
              <p className="title">Mô tả chi tiết: </p>
              <p className="desc">{building.description}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BuildingDetail;