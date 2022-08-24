import axios from "axios";

const getAgeGroupData = async function() {
    const req = axios.get('https://api.corona-zahlen.org/germany/age-groups');
    const res = await req;
    /*let rawData = [];
    rawData.push(res.data.data["A00-A04"]);
    rawData.push(res.data.data["A05-A14"]);
    rawData.push(res.data.data["A15-A34"]);
    rawData.push(res.data.data["A35-A59"]);
    rawData.push(res.data.data["A60-A79"]);
    rawData.push(res.data.data["A80+"]);*/

    return await (res.data.data);
}

export { getAgeGroupData };