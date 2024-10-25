import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios';

function BuildingEditPages({ api }) {
  
  const navigator = useNavigate();
  const location = useLocation();
 
  if(localStorage.getItem("token") == null) navigator("/");

  const [image, setImage] = useState(null);
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

  const id = location.state.id;
  useEffect(() => {
    axios.get(api + "/building?id=" + id)
      .then(resp => {
        setBuilding(resp.data[0])
      })
      .catch(err => console.log(err))
  }, []) 

  function deleteImage(fileName) {
    let config = {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }
    }
    axios.delete(api + "/image/" + fileName, config)
      .then(axios.get(api + "/building?fileName=" + fileName)
        .then(console.log("Delete image successful"))
        .catch(err => console.log(err))
      )
      .catch(err => console.log(err))
  }

  function addImage(e) {
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
    fd.append("files", image);

    axios.post(api + "/image/upload-images-vids/" + id, fd)
      .then(navigator("/building-edit", {state: {id: id}}))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Header/>
      <h1>Building edit page</h1>
      <li>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value = {building.name}/>
      </li>
      <li>
        <label htmlFor="ward">ward</label>
        <input type="text" name="ward" id="ward" value = {building.ward}/>
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
        <input type="text" name="district" id="district" value = {building.district}/>
      </li>
      <li>
        <label htmlFor="street">street</label>
        <input type="text" name="street" id="street" value = {building.street}/>
      </li>
      <li>
        <label htmlFor="floorArea">floorArea</label>
        <input type="text" name="floorArea" id="floorArea" value = {building.floorArea}/>
      </li>
      <li>
        <label htmlFor="managerName">managerName</label>
        <input type="text" name="managerName" id="managerName" value = {building.managerName}/>
      </li>
      <li>
        <label htmlFor="managerphone">managerphone</label>
        <input type="text" name="managerphone" id="managerphone" value = {building.managerphone}/>
      </li>
      <li>
        <label htmlFor="rentPrice">rentPrice</label>
        <input type="text" name="rentPrice" id="rentPrice" value = {building.rentPrice}/>
      </li>
      <li>
        <label htmlFor="servicefee">servicefee</label>
        <input type="text" name="servicefee" id="servicefee" value = {building.servicefee}/>
      </li>
      <li>
        <label htmlFor="carfee">carfee</label>
        <input type="text" name="carfee" id="carfee" value = {building.carfee}/>
      </li>
      <li>
        <label htmlFor="motofee">motofee</label>
        <input type="text" name="motofee" id="motofee" value = {building.motofee}/>
      </li>
      <li>
        <label htmlFor="waterfee">waterfee</label>
        <input type="text" name="waterfee" id="waterfee" value = {building.waterfee}/>
      </li>
      <li>
        <label htmlFor="electricityfee">electricityfee</label>
        <input type="text" name="electricityfee" id="electricityfee" value = {building.electricityfee}/>
      </li>
      <li>
        <label htmlFor="totalNumberOfAvailableRooms">totalNumberOfAvailableRooms</label>
        <input type="text" name="totalNumberOfAvailableRooms" id="totalNumberOfAvailableRooms" value = {building.totalNumberOfAvailableRooms}/>
      </li>
      <li>
        <label htmlFor="deposit">deposit</label>
        <input type="text" name="deposit" id="deposit" value = {building.deposit}/>
      </li>
      <li>
        <label htmlFor="desc">desc</label>
        <input type="text" name="desc" id="desc" value = {building.desc}/>
      </li>
      <li>
        <label htmlFor="images">images</label>
        {
          building.images ? building.images.map((image, idx) => {
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
                <button onClick = {() => deleteImage(image)}>Delete image</button>
              </div>
            )
          }) 
          : null
        }
        <input type="file" name="images" id="images" onChange={e => setImage(e.target.files[0])}/>
        <div>
          <button onClick={addImage}>Confirm</button>
        </div>
      </li>
      <Footer/>
    </div>
  )
}

export default BuildingEditPages;