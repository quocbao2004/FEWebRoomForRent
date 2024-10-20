import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BuildingSearchService, buildingSearchRequestHangleChange } from '../services/BuildingSearchService';

function BuildingSearchPage({ api }) {

  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

    function navigateToBuildingEditPage(id) {  
        navigate("/building-edit", {state: {id: id}});
    }

    function navigateToBuildingCreatePage() {
        navigate("/building-create");
    }

    function deleteBuilding(id) {
        let token = localStorage.getItem("token");
        axios.interceptors.request.use(
            config => {
                config.headers.Authorization = "Bearer " + token;
                return config;
            },
            error => {
                return Promise.reject(error);
            }
        )
        axios.delete(api + "/building/" + id)
            .then(function findAll() {
                axios.get(api + "/building")
                    .then(res => setRecords(res.data))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }

    const districts = [
        "Quận 1", "Quận 3", "Quận 4", "Quận 5", "Quận 6", "Quận 7", "Quận 8", 
        "Quận 10", "Quận 11", "Quận 12", "Quận Bình Thạnh", "Quận Tân Bình", 
        "Quận Tân Phú", "Quận Phú Nhuận", "Huyện Bình Chánh", "Thành Phố Thủ Đức", 
        "Quận Bình Tân", "Quận Gò Vấp", "Huyện Cần Giờ", "Huyện Củ Chi", 
        "Huyện Hóc Môn", "Huyện Nhà Bè"
    ];

  useEffect(() => {
    axios.get(api + "/building")
      .then(res => {
        setRecords(res.data);
      })
      .catch(err => console.log(err))
  }, [])  
 
  return (
    <div>
        <Header/>
        <h1>Building search page</h1>
        <div className="body">
              <div className="info show">
                  <div className="item">
                    <label htmlFor="name">Tên bất động sản</label>
                    <input type="text" name="name" id="name" onChange={buildingSearchRequestHangleChange}/>
                  </div>

                  <div className="item">
                    <label htmlFor="type">Loại</label>
                    <select name="type" id="type" defaultValue="" onChange={buildingSearchRequestHangleChange}>
                      <option value="">Chọn loại</option>
                      <option value="Nguyên căn">Nguyên căn</option>
                      <option value="Phòng trọ">Phòng trọ</option>
                      <option value="Kho">Kho</option>
                      <option value="Đất">Đất</option>
                    </select>
                  </div>

                  <div className="item">
                    <label htmlFor="street">Đường</label>
                    <input type="text" name="street" id="street" onChange={buildingSearchRequestHangleChange}/>
                  </div>

                  <div className="item">
                    <label htmlFor="ward">Phường</label>
                    <input type="text" name="ward" id="ward" onChange={buildingSearchRequestHangleChange}/>
                  </div>

                  <div className="item">
                    <label htmlFor="district">Quận</label>
                    <select name="district" id="district" defaultValue="" onChange={buildingSearchRequestHangleChange}>
                      <option value="">Chọn quận</option>
                      {districts.map((district, index) => (
                        <option key={index} value={district}>
                          {district}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="border-item">
                    <div className="item">
                      <label htmlFor="floorAreaFrom">Diện tích tối thiểu</label>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="number" name="floorAreaFrom" id="floorAreaFrom" placeholder='ex: 16,5'/>
                        <span className="metvuong">m²</span>
                      </div>
                    </div>
                    <div className="item">
                      <label htmlFor="floorAreaTo">Diện tích tối đa</label>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="number" name="floorAreaTo" id="floorAreaTo" placeholder="ex: 20" />
                        <span className="metvuong">m²</span>
                      </div>
                    </div>
                    <div className="item">
                      <label htmlFor="rentPriceFrom">Giá thuê tối thiểu</label>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="number" name="rentPriceFrom" id="rentPriceFrom" placeholder="ex: 1,6" />
                        <span className="metvuong">Triệu</span>
                      </div>
                    </div>
                    <div className="item">
                      <label htmlFor="rentPriceTo">Giá thuê tối đa</label>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="number" name="rentPriceTo" id="rentPriceTo" placeholder="ex: 3" />
                        <span className="metvuong">Triệu</span>
                      </div>
                    </div>
                  </div>
                  <div className="action">
                  <button onClick={() => BuildingSearchService(api, setRecords)} className="btn submit-btn">Tìm kiếm</button>
                </div>
                </div>

            </div>
        {localStorage.getItem("token") != null ? <button onClick={navigateToBuildingCreatePage}>Create Building</button> : null}
        {               
            records.map(function(it, idx) {
                return (
                    <div key={idx}>
                        <div>Id: {it.id}</div>
                        <div>
                            <label htmlFor="">Car fee</label> {it.carfee}
                        </div>
                        <div>
                            <label htmlFor="">Deposit</label> {it.deposit}
                        </div>
                        <div>
                            <label htmlFor="">District</label> {it.district}
                        </div>
                        <div>
                            <label htmlFor="">Electricity Fee</label> {it.electricityfee}
                        </div>
                        <div>
                            <label htmlFor="">Floor Area</label> {it.floorArea}
                        </div>
                        <div>
                            <label htmlFor="">Images</label> 
                            {
                                it.images.map((image, idx) => {
                                    let lastIdxOfDot = image.lastIndexOf(".");
                                    let s = image.substring(lastIdxOfDot);
                                    return (
                                        <div key = {idx}>
                                            {
                                                s.localeCompare(".mp4") == 0 ? 
                                                    <video width="750" height="500" controls key = {idx}>
                                                        <source src={`http://localhost:8080/api/image/display-image-vid?filename=${image}`} type="video/mp4"/>
                                                    </video> : 
                                                    <img src = {`http://localhost:8080/api/image/display-image-vid?filename=${image}`} key = {idx}/>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <label htmlFor="">Manager Name</label> {it.managerName}
                        </div>
                        <div>
                            <label htmlFor="">Manager Phone</label> {it.managerphone}
                        </div>
                        <div>
                            <label htmlFor="">Motor fee</label> {it.motofee}
                        </div>
                        <div>
                            <label htmlFor="">Name</label> {it.name}
                        </div>
                        <div>
                            <label htmlFor="">Rent Price</label> {it.rentPrice}
                        </div>
                        <div>
                            <label htmlFor="">Service Fee</label> {it.servicefee}
                        </div>
                        <div>
                            <label htmlFor="">Street</label> {it.street}
                        </div>
                        <div>
                            <label htmlFor="">Total Number Of Available Rooms</label> {it.totalNumberOfAvailableRooms}
                        </div>
                        <div>
                            <label htmlFor="">Type</label> {it.type}
                        </div>
                        <div>
                            <label htmlFor="">Ward</label> {it.ward}
                        </div>
                        <div>
                            <label htmlFor="">Water fee</label> {it.waterfee}
                        </div>
                        <div>
                            <label htmlFor="">Description</label> {it.description}
                        </div>
                        {localStorage.getItem("token") != null ? <button onClick={() => navigateToBuildingEditPage(it.id)}>Edit Building</button> : null}
                        {localStorage.getItem("token") != null ? <button onClick={() => deleteBuilding(it.id)}>Delete Building</button> : null}
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                )
            })
        }
        <Footer/>
    </div>
  )
}

export default BuildingSearchPage
