import { LineChart, Line, ResponsiveContainer } from 'recharts';

export default function TinyLineChart(props) {
    //console.log('props', props.chartData)
    return(
        <ResponsiveContainer width="100%" height={300}>
            <LineChart width={300} height={100} data={props.chartData}>
                <Line type="monotone" dataKey={props.chartDataKey} stroke="#8884d8" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    )
}