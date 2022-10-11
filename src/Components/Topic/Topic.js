import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Topic.css';

const Topic = ({topic}) => {
    const {id, logo, name, total} = topic

    return (
        <Col>
            <Card className='card-quiz'>
                <Card.Img className="cart-img" variant="top" src={logo} />
                <Card.Body>
                <Card.Title>
                    <h4>{name}</h4>
                    <p><small>Total Quiz: {total}</small></p></Card.Title>
                </Card.Body>
                <Card.Footer>
                <Link to={`/quiz/${id}`}>
                    <Button className='btn-quiz' variant="primary">Start Quiz</Button>
                </Link>
                </Card.Footer>
            </Card>
        </Col>


    );
};

export default Topic;