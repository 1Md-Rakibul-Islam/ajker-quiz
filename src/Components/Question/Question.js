import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';


const Quest = ({Ques}) => {
    const { id, correctAnswer, options, question} = Ques
    const mainQues = question.slice(3, question.length - 4)

    const quizAnswer = (option) => {
        if (correctAnswer === option) {
            console.log("Good Job. Your answer is Correct.")
        }
        else {
            console.log("Sorry, Your answer is Wrong")
        }
    }

    return (
        <ListGroup className="my-5 border">
            <h4 className='mt-3'>{mainQues}</h4>
            <Row xxs={1} xs={1} sm={1} md={2} lg={2} xl={2} xxl={2} className='m-3'>
                {
                    options.map(option => <Col><ListGroup.Item key={id} onClick={() => quizAnswer(option)}>{option}</ListGroup.Item></Col>)
                }
            </Row>
        </ListGroup>
  );

};












export default Quest;