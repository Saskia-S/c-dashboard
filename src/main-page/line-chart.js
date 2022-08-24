import {LineChart, Line, ResponsiveContainer, Tooltip} from 'recharts';

export default function TinyLineChart(props) {

    return(
        <ResponsiveContainer width="100%" height={300}>
            <LineChart width={300} height={100} data={props.chartData}>
                <Line type="monotone" dataKey={props.chartDataKey} stroke="#8884d8" strokeWidth={2} />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    )
}