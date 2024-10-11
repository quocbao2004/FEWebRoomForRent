import React from 'react';
import { useState } from 'react';
import LoginService from '../services/LoginService';
import axios from 'axios';
// import BuildingSearchService from '../services/BuildingSearchService'

function LoginPages({ api }) {
    
    const [userData, setUserData] = useState({
        phone: "",
        password: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setUserData({ ...userData, [e.target.name]: value });
    }
    let [buildings, setBuildings] = useState("");
    function BuildingSearchService(api) {
        axios.get(api + "/building")
            .then(function(res) {  
                return (
                    setBuildings(res.data.map((it, idx) => {
                        return (
                            <div key={it.id}>
                                <div>
                                    <label htmlFor="">Car fee</label>
                                    <div>{it.carfee}</div>
                                </div>
                                <div>
                                    <label htmlFor="">Deposit</label>
                                    <div>{it.deposit}</div>
                                </div>
                                <div>
                                    <label htmlFor="">District</label>
                                    <div>{it.district}</div>
                                </div>
                                <div>
                                    <label htmlFor="">Electricity Fee</label>
                                    <div>{it.electricityfee}</div>
                                </div>
                                <div>
                                    <label htmlFor="">Floor Area</label>
                                    <div>{it.floorArea}</div>
                                </div>
                                <div>
                                    <label htmlFor="">Images</label>
                                    <div>
                                        {it.images.map((image, idx) => {
                                            <div index = {image.id}>{image}</div>
                                        })}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="">Manager Name</label>
                                    <div>{it.managerName}</div>
                                </div>
                                <div>
                                    <label htmlFor="">Manager Phone</label>
                                    <div>{it.managerphone}</div>
                                </div>
                                <div>
                                    <label htmlFor="">Motor fee</label>
                                    <div>{it.motofee}</div>
                                </div>
                                <div>
                                    <label htmlFor="">Name</label>
                                    <div>{it.name}</div>
                                </div>
                                <div>
                                    <label htmlFor="">Rent Price</label>
                                    <div>{it.rentPrice}</div>
                                </div>
                                <div>
                                    <label htmlFor="">Service Fee</label>
                                    <div>{it.servicefee}</div>
                                </div>
                                <div>
                                    <label htmlFor="">Street</label>
                                    <div>{it.street}</div>
                                </div>
                                <div>
                                    <label htmlFor="">Total Number Of Available Rooms</label>
                                    <div>{it.totalNumberOfAvailableRooms}</div>
                                </div>
                                <div>
                                    <label htmlFor="">Type</label>
                                    <div>{it.type}</div>
                                </div>
                                <div>
                                    <label htmlFor="">Ward</label>
                                    <div>{it.ward}</div>
                                </div>
                                <div>
                                    <label htmlFor="">Water fee</label>
                                    <div>{it.waterfee}</div>
                                </div>
                                <div>
                                    <label htmlFor="">Description</label>
                                    <div>{it.description}</div>
                                </div>
                            </div>
                        )
                    }))
                )
            })
            .catch(function(err) {console.log(err);})
    }
    BuildingSearchService(api);

    return (
        <>
            <form action="">
                <label htmlFor="phone">Phone number</label>
                <input type="text" name="phone" id="phone" onChange={handleChange}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={handleChange}/>
                <button onClick={e => LoginService(e, userData, api)}>Login</button>
            </form>
            { buildings }
        </>
    )
}

export default LoginPages;