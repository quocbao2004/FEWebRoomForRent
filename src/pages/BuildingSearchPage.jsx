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
        <input type="text" onChange={buildingSearchRequestHangleChange} name="name" id="" placeholder='Tên bất động sản'/>
        <input type="text" onChange={buildingSearchRequestHangleChange} name="ward" id="" placeholder='Phường'/>
        <input type="text" onChange={buildingSearchRequestHangleChange} name="type" id="" placeholder='Loại'/>

        <select name="type" id="type" onChange={buildingSearchRequestHangleChange}>
            <option value="PHONG_TRO">Phòng Trọ</option>
            <option value="NGUYEN_CAN">Nguyên Căn</option>
        </select>

        <input type="text" onChange={buildingSearchRequestHangleChange} name="district" id="" placeholder='Quận'/>
        <input type="text" onChange={buildingSearchRequestHangleChange} name="street" id="" placeholder='Đường'/>
        <input type="text" onChange={buildingSearchRequestHangleChange} name="floorArea" id="" placeholder='Diện tích'/>
        <input type="text" onChange={buildingSearchRequestHangleChange} name="rentPrice" id="" placeholder='Giá'/>
        <button type="submit" onClick={() => BuildingSearchService(api, setRecords)}>Tìm Kiếm</button>
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
