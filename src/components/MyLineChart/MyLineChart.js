import React from 'react';
import useCharts from '../../Hooks/useCharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MyLineChart = () => {

    const [data, setData] = useCharts([]);

    return (
        <div className='flex flex-col justify-center items-center'>
            <h4 className='uppercase text-2xl font-bold my-5 text-indigo-800'>Monthly Sell</h4>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default MyLineChart;