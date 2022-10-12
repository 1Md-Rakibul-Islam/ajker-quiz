import React from 'react';
import { Toast } from 'react-bootstrap';

const answerTost = (option) => {
    // console.log(option);
    return (
        <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{option}</strong>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>
    );
};

export default answerTost;