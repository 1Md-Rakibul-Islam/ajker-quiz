import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Home.css'
import './image-header.jpg'
import Topic from '../Topic/Topic';

const Home = () => {
    const loadQuizTopic = useLoaderData();
    const topics = loadQuizTopic.data


    return (
        <div>
            <h2 className='text-primary'>This is Home Page</h2>
            {/* <header className='banner-img'>
            </header> */}
            <h4 className='mb-5'>Quiz Topic: {topics.length}</h4>
            <Container>
                <Row xxs={1} xs={1} md={2} lg={4} xl={4} xxl={4}  className=''>
                    {
                        topics.map(topic => <Topic
                            key={topic.id}
                            topic={topic} 
                        ></Topic>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;