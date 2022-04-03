import React from 'react';
import MyAreaChart from '../MyAreaChart/MyAreaChart';
import MyBarChart from '../MyBarChart/MyBarChart';
import MyLineChart from '../MyLineChart/MyLineChart';

const Dashboard = () => {
    return (
        <div className='mx-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 py-10'>
                <MyLineChart></MyLineChart>
                <MyAreaChart></MyAreaChart>
                <MyBarChart></MyBarChart>
            </div>
        </div>
    );
};

export default Dashboard; <h1>dashboard</h1>