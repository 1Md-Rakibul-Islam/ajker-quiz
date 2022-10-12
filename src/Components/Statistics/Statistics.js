import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from 'recharts';

const Statistics = () => {
    const quizChartDataLoad = useLoaderData().data
    // console.log(quizChartDataLoad)
    return (
        <div className=''>
            <h2 className='my-5'>Quiston length of all topic quiz</h2>
            <Container className='mx-auto'>
                <LineChart width={500} height={300} data={quizChartDataLoad}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                    <Line type="monotone" dataKey="name" stroke="#8884d8" />
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                </LineChart>
            </Container>
        </div>
    );
};

export default Statistics;