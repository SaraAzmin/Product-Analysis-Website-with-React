import React from 'react';
import useCharts from '../../Hooks/useCharts';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const MyAreaChart = () => {

    const [data, setData] = useCharts([]);

    return (
        <div className='flex flex-col justify-center items-center'>
            < h4 className='uppercase text-2xl font-bold my-5 text-indigo-800' > Investment VS Revenue</h4 >
            <ResponsiveContainer width="100%" aspect={3}>
                <AreaChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />

                </AreaChart>
            </ResponsiveContainer>
        </div >
    );
};

export default MyAreaChart;