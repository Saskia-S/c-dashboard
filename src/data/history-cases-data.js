import axios from "axios";
import moment from "moment";
import {useEffect, useState} from "react";
import { LineChart, Line, Tooltip, CartesianGrid, ResponsiveContainer,  XAxis, YAxis, Legend} from 'recharts';

export default function HistoryCases(props) {
    let days = 0;
    if(props) {
        days = props.days
    }
    const [historyCases, setHistoryCases] = useState(null);

    const getHistoryCases = async () => {
        const req = axios.get(`https://api.corona-zahlen.org/germany/history/cases/${days}`); /* set props.days in other component to get data of specific number of days only */
        const res = await req;
        setHistoryCases(res.data.data);
        return(historyCases);
    }

    useEffect(() => {
        getHistoryCases();
    }, [days])

    function tickFormatter(tickItem) {
        return moment(tickItem).format('DD.MM');
    }

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${moment(label).format('DD.MM.YY')} : ${payload[0].value} cases`}</p>
                </div>
            );
        }

        return null;
    };


    return(
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
    );
}