import axios from 'axios';

export function BuildingSearchService( api, setRecords, type ) {
    const params = new URLSearchParams();
    params.append("id", buildingSearchRequest.id);
    params.append("name", buildingSearchRequest.name);
    params.append("ward", buildingSearchRequest.ward);
    buildingSearchRequest.type != "" ? params.append("type", buildingSearchRequest.type) : params.append("type", type);
    params.append("district", buildingSearchRequest.district);
    params.append("street", buildingSearchRequest.street);
    params.append("rentPriceFrom", buildingSearchRequest.rentPriceFrom);
    params.append("rentPriceTo", buildingSearchRequest.rentPriceTo);
    params.append("floorAreaFrom", buildingSearchRequest.floorAreaFrom);
    params.append("floorAreaTo", buildingSearchRequest.floorAreaTo);

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
    floorAreaFrom: "",
    floorAreaTo: "",
    rentPriceFrom: "",
    rentPriceTo: ""
};

export function buildingSearchRequestHangleChange(e) {
    buildingSearchRequest = {...buildingSearchRequest, [e.target.name]: e.target.value};
}