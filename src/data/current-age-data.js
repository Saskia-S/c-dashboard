import axios from "axios";

const getAgeGroupData = async function() {
    return await axios.get('https://api.corona-zahlen.org/germany/age-groups');
}

export { getAgeGroupData };