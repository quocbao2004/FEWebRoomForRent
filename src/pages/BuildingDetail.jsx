import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../assets/css/buildingDetail.css'

// test img
import featured1 from '../assets/img/home-img/featured.avif';

function BuildingDetail() {
  return (
    <div>
      <Header/>
        <div className="detail">
            <div className="main-content">
                <div className="body">
                    <div className="slide">
                        <img src={featured1} alt="" className="slide-content" />
                    </div>

                    <div className="detail-content">
                        <div className="-detail-common">
                          <h2 className="detail-title">Thông tin bất động sản</h2>
                          <h3 className='name'>Nhà cho thuê khu vực quận 7</h3>
                          <p className="title">Địa chỉ: </p>
                          <p className="address">30 vo van kiet, phuong 8, quan 7, tphcm</p>
                        </div>
                        <div className="characteristic">
                          <h3 className="title-block">Giá</h3>
                          <div className="list-item">
                          <div className="item">
                            <p className="title">Giá phòng</p>
                            <p className="rentPrice">1,8tr/tháng</p>
                          </div>
                          <div className="item">
                            <p className="title">Giá điện</p>
                            <p className="electricfee">4k/kw</p>
                          </div>
                          <div className="item">
                            <p className="title">Giá nước</p>
                            <p className="waterfee">100k</p>
                          </div>
                          </div>
                          <div className="list-item">
                            <div className="item">
                              <p className="title">Phí dịch vụ</p>
                              <p className="servicefee">100k</p>
                            </div>

                            <div className="item">
                              <p className="title">Phí ô tô</p>
                              <p className="carfee">100k</p>
                            </div>

                            <div className="item">
                              <p className="title">Phí mô tô</p>
                              <p className="motofee">100k</p>
                            </div>  
                          </div>
                        </div>
                        <div className="characteristic">
                          <div className="list-item">
                            <div className="item">
                              <p className="title">Diện tích</p>
                              <p className="desc">20m2</p>
                            </div>
                            <div className="item">
                              <p className="title">Số phòng trống</p>
                              <p className="desc">10</p>
                            </div>

                            <div className="item">
                              <p className="title">tiền cọc</p>
                              <p className="desc">1,8tr</p>
                            </div>
                          </div>
                        </div>
                        <p className="title">Mô tả chi tiết: </p>
                        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Veniam libero qui fugiat. Laudantium a repudiandae ipsum impedit? 
                          Harum voluptates explicabo, distinctio dolorum labore maiores aperiam officia
                          repellat laboriosam vero facere.</p>
                    </div>
                </div>
            </div>
        </div>
      <Footer/>
    </div>
  )
}

export default BuildingDetail;