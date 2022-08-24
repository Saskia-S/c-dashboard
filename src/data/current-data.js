import axios from "axios";

const getCurrData = async function() {
    const req = axios.get('https://api.corona-zahlen.org/germany');
    const res = await req;
    return await (res);
}

export { getCurrData };


    /*function handleClick() {
        (async () => {
            console.log(await getHistoryDeaths(5))
        })()
    }*/