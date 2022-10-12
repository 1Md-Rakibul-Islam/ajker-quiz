import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Question.css'




const Quest = ({Ques}) => {
    const { id, correctAnswer, options, question} = Ques
    const mainQues = question.slice(3, question.length - 4)


    const quizAnswer = (option) => {

        toast((correctAnswer === option ? 'Good Job. Your answer is Correct.' : 'Sorry, Your answer is Wrong'), {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return (
        <ListGroup className="my-5 border">
            <h4 className='mt-3'>{mainQues}</h4>
            <Row xxs={1} xs={1} sm={1} md={2} lg={2} xl={2} xxl={2} className='m-3'>
                {
                    options.map(option => <Col><ListGroup.Item key={id} onClick={() => quizAnswer(option)}>{option}</ListGroup.Item></Col>)
                
                }
                <ToastContainer />
            </Row>
        </ListGroup>
  );

};












export default Quest;