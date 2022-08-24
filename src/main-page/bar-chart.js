import { BarChart, Bar, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function AgeGroupBarChart(props) {
    const customTooltip = {
        backgroundColor: '#3b3b3b',
        border: 'none',
        fontSize: '15px',
        color: 'white'
    }

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div style={customTooltip}>
                    <p className="p-2">{`Male : ${payload[0].value} cases`}</p>
                    <p className="p-2">{`Female : ${payload[1].value} cases`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart width={300} height={100} data={props.chartData}>
                <Bar dataKey={props.chartDataKeyM} fill="#8884d8" />
                <Bar dataKey={props.chartDataKeyF} fill="#82ca9d" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
            </BarChart>
        </ResponsiveContainer>
    );
}