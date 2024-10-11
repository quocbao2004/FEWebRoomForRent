import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function BuildingEditPages(building) {

  return (
    <div id={building.id}>
      <Header/>
      <h1>Building edit page</h1>
      <li>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </li>
      <li>
        <label htmlFor="ward">ward</label>
        <input type="text" name="ward" id="ward" />
      </li>
      <li>
        <label htmlFor="type">type</label>
        <input type="text" name="type" id="type" />
      </li>
      <li>
        <label htmlFor="district">district</label>
        <input type="text" name="district" id="district" />
      </li>
      <li>
        <label htmlFor="street">street</label>
        <input type="text" name="street" id="street" />
      </li>
      <li>
        <label htmlFor="floorArea">floorArea</label>
        <input type="text" name="floorArea" id="floorArea" />
      </li>
      <li>
        <label htmlFor="managerName">managerName</label>
        <input type="text" name="managerName" id="managerName" />
      </li>
      <li>
        <label htmlFor="managerphone">managerphone</label>
        <input type="text" name="managerphone" id="managerphone" />
      </li>
      <li>
        <label htmlFor="rentPrice">rentPrice</label>
        <input type="text" name="rentPrice" id="rentPrice" />
      </li>
      <li>
        <label htmlFor="servicefee">servicefee</label>
        <input type="text" name="servicefee" id="servicefee" />
      </li>
      <li>
        <label htmlFor="carfee">carfee</label>
        <input type="text" name="carfee" id="carfee" />
      </li>
      <li>
        <label htmlFor="motofee">motofee</label>
        <input type="text" name="motofee" id="motofee" />
      </li>
      <li>
        <label htmlFor="waterfee">waterfee</label>
        <input type="text" name="waterfee" id="waterfee" />
      </li>
      <li>
        <label htmlFor="electricityfee">electricityfee</label>
        <input type="text" name="electricityfee" id="electricityfee" />
      </li>
      <li>
        <label htmlFor="totalNumberOfAvailableRooms">totalNumberOfAvailableRooms</label>
        <input type="text" name="totalNumberOfAvailableRooms" id="totalNumberOfAvailableRooms" />
      </li>
      <li>
        <label htmlFor="deposit">deposit</label>
        <input type="text" name="deposit" id="deposit" />
      </li>
      <li>
        <label htmlFor="desc">desc</label>
        <input type="text" name="desc" id="desc" />
      </li>
      <li>
        <label htmlFor="images">images</label>
        <input type="file" name="images" id="images" />
      </li>
      <Footer/>
    </div>
  )
}

export default BuildingEditPages;