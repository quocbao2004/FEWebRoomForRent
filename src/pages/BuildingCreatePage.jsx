import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom';
import axios, { AxiosHeaders } from 'axios';

function BuildingCreatePage({ api }) {

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
    images: null
  };
  const navigator = useNavigate();

  function createBuildingBtnHandler(api, building) {  

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
    const fd = new FormData();
    fd.append("files", building.images);

    axios.post(api + "/building", building)
      .then(resp => { 
        let buildingId = resp.data.id;
        
        axios.post(api + "/image/upload-images-vids/" + buildingId, fd)
          .then(navigator("/building-search"))
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Header/>
      <h1>Building create page</h1>
      <li>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={(e) => building.name = e.target.value}/>
      </li>
      <li>
        <label htmlFor="ward">ward</label>
        <input type="text" name="ward" id="ward" onChange={(e) => building.ward = e.target.value}/>
      </li>
      <li>
        <label htmlFor="type">type</label>
        <select name="type" id="type" onChange={(e) => building.type = e.target.value}>
          <option value="PHONG_TRO">Phòng Trọ</option>
          <option value="NGUYEN_CAN">Nguyên Căn</option>
        </select>
      </li>
      <li>
        <label htmlFor="district">district</label>
        <input type="text" name="district" id="district" onChange={(e) => building.district = e.target.value}/>
      </li>
      <li>
        <label htmlFor="street">street</label>
        <input type="text" name="street" id="street" onChange={(e) => building.street = e.target.value}/>
      </li>
      <li>
        <label htmlFor="floorArea">floorArea</label>
        <input type="text" name="floorArea" id="floorArea" onChange={(e) => building.floorArea = parseInt(e.target.value)}/>
      </li>
      <li>
        <label htmlFor="managerName">managerName</label>
        <input type="text" name="managerName" id="managerName" onChange={(e) => building.managerName = e.target.value}/>
      </li>
      <li>
        <label htmlFor="managerphone">managerphone</label>
        <input type="text" name="managerphone" id="managerphone" onChange={(e) => building.managerphone = e.target.value}/>
      </li>
      <li>
        <label htmlFor="rentPrice">rentPrice</label>
        <input type="text" name="rentPrice" id="rentPrice" onChange={(e) => building.rentPrice = parseInt(e.target.value)}/>
      </li>
      <li>
        <label htmlFor="servicefee">servicefee</label>
        <input type="text" name="servicefee" id="servicefee" onChange={(e) => building.servicefee = parseInt(e.target.value)}/>
      </li>
      <li>
        <label htmlFor="carfee">carfee</label>
        <input type="text" name="carfee" id="carfee" onChange={(e) => building.carfee = parseInt(e.target.value)}/>
      </li>
      <li>
        <label htmlFor="motofee">motofee</label>
        <input type="text" name="motofee" id="motofee" onChange={(e) => building.motofee = parseInt(e.target.value)}/>
      </li>
      <li>
        <label htmlFor="waterfee">waterfee</label>
        <input type="text" name="waterfee" id="waterfee" onChange={(e) => building.waterfee = parseInt(e.target.value)}/>
      </li>
      <li>
        <label htmlFor="electricityfee">electricityfee</label>
        <input type="text" name="electricityfee" id="electricityfee" onChange={(e) => building.electricityfee = parseInt(e.target.value)}/>
      </li>
      <li>
        <label htmlFor="totalNumberOfAvailableRooms">totalNumberOfAvailableRooms</label>
        <input type="text" name="totalNumberOfAvailableRooms" id="totalNumberOfAvailableRooms" onChange={(e) => building.totalNumberOfAvailableRooms = parseInt(e.target.value)}/>
      </li>
      <li>
        <label htmlFor="deposit">deposit</label>
        <input type="text" name="deposit" id="deposit" onChange={(e) => building.deposit = e.target.value}/>
      </li>
      <li>
        <label htmlFor="desc">desc</label>
        <input type="text" name="desc" id="desc" onChange={(e) => building.desc = e.target.value}/>
      </li>
      <li>
        <label htmlFor="images">images</label>
        <input type="file" name="images" id="images" onChange={(e) => building.images = e.target.files[0]}/>
      </li>
      <div>
        <button onClick={() => createBuildingBtnHandler(api, building)}>Confirm</button>
      </div>
      <Footer/>
    </div>
  )
}

export default BuildingCreatePage;