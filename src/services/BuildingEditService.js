import axios from "axios";

export function submitForm(api, newBuilding) {  
    axios.post(api + "/building", newBuilding)
        .then(resp => {
            return resp.data.id;
        })
        .catch(err => console.log(err))
        .then((buildingId) => {
            axios.post(api + "/building/upload-images-vids/" + buildingId, newBuilding.images)
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
        })
}