import axios from "axios";

const getHistCases = async function(days) {
    const req = axios.get(`https://api.corona-zahlen.org/germany/history/cases/${days}`); /* set days in other component to get data of specific number of days only */
    const res = await req;
    return await res.data.data;
}

export { getHistCases };


    /*return(
        <div className="container">
            <ResponsiveContainer width="100%" height={300}>
                <LineChart width={1300}
                           height={300}
                           data={historyCases}
                           margin={{
                               top: 5,
                               right: 30,
                               left: 20,
                               bottom: 5,
                           }}>
                    <Line type="monotone"
                          dataKey="cases"
                          stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="date"
                           interval={0}
                           tickFormatter={tickFormatter} />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />}  />
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );*/
