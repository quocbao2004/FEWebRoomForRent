import axios from 'axios';

export function BuildingSearchService( api, setRecords ) {
    const params = new URLSearchParams();
    params.append("id", buildingSearchRequest.id);
    params.append("name", buildingSearchRequest.name);
    params.append("ward", buildingSearchRequest.ward);
    params.append("type", buildingSearchRequest.type);
    params.append("district", buildingSearchRequest.district);
    params.append("street", buildingSearchRequest.street);
    params.append("rentPrice", buildingSearchRequest.rentPrice);
    params.append("floorArea", buildingSearchRequest.floorArea);

    axios.get(api + "/building?" + params) 
        .then(res => setRecords(res.data))
        .catch(err => console.log(err))
}

export let buildingSearchRequest = {
    id: "",
    name: "", 
    ward: "",
    type: "",
    district: "",
    street: "",
    floorArea: "",
    rentPrice: ""
};

export function buildingSearchRequestHangleChange(e) {
    buildingSearchRequest = {...buildingSearchRequest, [e.target.name]: e.target.value};
}