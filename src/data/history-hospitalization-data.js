import axios from "axios";

const getHospData = async function(days) {
    const req = axios.get(`https://api.corona-zahlen.org/germany/history/hospitalization/${days}`); /* set days in other component to get data of specific number of days only */
    const res = await req;
    return await res.data.data;
}

export { getHospData };

    /*return(
        <div className="container">
            <ResponsiveContainer width="100%" height={300}>
                <ComposedChart
                    width={500}
                    height={400}
                    data={hospData}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="date"
                           interval={25}
                           tickFormatter={tickFormatter}
                    />
                    <YAxis />
                    <Tooltip/>
                    <Bar dataKey="incidence7Days"
                         barSize={20}
                         fill="#413ea0" />
                    <Line type="monotone"
                          dataKey="cases7Days"
                          stroke="#ff7300" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );*/
