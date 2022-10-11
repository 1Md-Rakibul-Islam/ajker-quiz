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

    const startQuizHandelar = () => {
        console.log('clicked')
    }

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
                            startQuizHandelar={startQuizHandelar}  
                        ></Topic>)
                    }
                </Row>
            </Container>
        </div>
    );
};

{/* 

<Row  className="g-4">

        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>

 */}

export default Home;