import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizPage = () => {
    const quizes = useLoaderData();
    console.log(quizes)
    return (
        <div>
            <h4>onek onek quize</h4>
        </div>
    );
};

export default QuizPage;