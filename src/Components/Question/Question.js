import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { ToastContainer, toast } from 'react-toastify';
import { EyeIcon } from '@heroicons/react/24/solid';
import 'react-toastify/dist/ReactToastify.css';
import './Question.css'




const Quest = ({Ques}) => {
    const { id, correctAnswer, options, question} = Ques
    const mainQues = question.slice(3, question.length - 4)

//secection answer question tost 
    const quizAnswer = (option) => {
        const dynamicToast = correctAnswer === option ? toast.success : toast.error

        dynamicToast(
            (correctAnswer === option ? <h4 className='w-4 h-5 p-1' >Good Job! <small className='d-block'>Right Answer</small></h4> : <h4 className='w-4 h-5 p-1' >Sorry, <small className='d-block'>Wrong Answer</small></h4>), {
            position: "top-center",
            autoClose: 4000,
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

            {/* hidden currect answer show toas */}
            <EyeIcon onClick={() => toast('Currect Answer:' + correctAnswer)} className='hidden-ans-icon text-primary mx-auto' />

            <Row xxs={1} xs={1} sm={1} md={2} lg={2} xl={2} xxl={2} className='m-3'>
                {
                    options.map(option => <Col>
                        <ListGroup.Item key={id} onClick={() => quizAnswer(option)}>{option}</ListGroup.Item>
                    </Col>)

                }
                <ToastContainer />
            </Row>
        </ListGroup>
  );

};












export default Quest;