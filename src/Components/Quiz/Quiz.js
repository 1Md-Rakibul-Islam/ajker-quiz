import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Quest from '../Question/Question';


const Quiz = () => {
    const quizData = useLoaderData()
    const {id, name, questions} = quizData.data

    return (
        <div>
            <h3 className='my-5'>Quiz of {name}</h3>
            <Container className=''>
                {
                    questions.map( Ques => <Quest
                            key={id}
                            Ques={Ques}
                        ></Quest>)
                }
            </Container>

        </div>
    );
};

export default Quiz;