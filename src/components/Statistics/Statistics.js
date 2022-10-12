import React from 'react';
import './Statistics.css'
import { useLoaderData } from 'react-router-dom';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart } from 'recharts';

const Statistics = () => {
    const topics = useLoaderData().data;
    console.log(topics)
    return (
        <div className='chart-cont'>
            <BarChart width={400} height={400} data={topics}>
            <XAxis dataKey="name" />
            <YAxis />   
            <Bar dataKey="total" fill="#82ca9d" />
            <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Statistics;