import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quizData = useLoaderData()
    console.log(quizData);

    return (
        <div>
            <h2>This is Quiz page</h2>

        </div>
    );
};

export default Quiz;