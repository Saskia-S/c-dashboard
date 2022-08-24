import axios from "axios";

const getHistoryDeaths = async function(days) {
    const req = axios.get(`https://api.corona-zahlen.org/germany/history/deaths/${days}`); /* set days in other component to get data of specific number of days only */
    const res = await req;
    return await res.data.data;
}

export { getHistoryDeaths };