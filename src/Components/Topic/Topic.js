import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './Topic.css';

const Topic = ({topic, startQuizHandelar}) => {

    const {id, logo, name, total} = topic


    return (
        <Col>
            <Card className='card-quiz'>
                <Card.ImgOverlay>
                    <h4 className='text-light' align="start" >Total Quiz: {total}</h4>
                </Card.ImgOverlay>
                <Card.Img className="cart-img" variant="top" src={logo} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                </Card.Body>
                <Card.Footer>
                <Button onClick={() => startQuizHandelar} className='btn-quiz' variant="primary">Start Quiz</Button>
                </Card.Footer>
            </Card>
        </Col>


    );
};

export default Topic;