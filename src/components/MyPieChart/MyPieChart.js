import React from 'react';
import useCharts from '../../Hooks/useCharts';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const MyPieChart = () => {

    const [data, setData] = useCharts([]);

    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
                < h4 className='uppercase text-2xl font-bold my-5 text-indigo-800' > Investment VS Revenue</h4 >
                <ResponsiveContainer width="100%" aspect={3}>
                    <PieChart>
                        <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                        <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                    </PieChart>
                </ResponsiveContainer>
            </div >
        </div>
    );
};

export default MyPieChart;