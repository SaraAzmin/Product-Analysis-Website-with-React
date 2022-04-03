import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useCharts from '../../Hooks/useCharts';


const MyBarChart = () => {

    const [data, setData] = useCharts([]);

    return (
        <div className='flex flex-col justify-center items-center'>
            < h4 className='uppercase text-2xl font-bold my-5 text-indigo-800' > Investment VS Revenue</h4 >
            <ResponsiveContainer width="100%" aspect={3}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                    <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div >
    );
};

export default MyBarChart;