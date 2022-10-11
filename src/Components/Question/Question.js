import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Quest = ({Ques}) => {
    const { id, correctAnswer, options, question} = Ques
    console.log(options);

    return (
        <ListGroup className="my-5 border">
            <h4>{question}</h4>
            <Row xxs={1} xs={1} sm={1} md={2} lg={2} xl={2} xxl={2} className='m-3'>
                <Col>
                    <ListGroup.Item>{options[0]}</ListGroup.Item>
                </Col>
                <Col>
                    <ListGroup.Item>{options[1]}</ListGroup.Item>
                </Col>
                <Col>
                    <ListGroup.Item>{options[2]}</ListGroup.Item>
                </Col>
                <Col>
                    <ListGroup.Item>{options[3] ? options[3] : '.....'}</ListGroup.Item>
                </Col>
            </Row>
        </ListGroup>
  );

};

export default Quest;