import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MCQ from '../MCQ/MCQ';

const QuizPage = () => {
    const {total, name, logo, questions} = useLoaderData().data;
    return (
        <div>
            <div>
                <img src={logo} alt='logo'/>
                <h1>Start {name} Quiz</h1>
                <h4>Total numbers of Quiz: {total}</h4>
            </div>
            <div>
                {
                    questions.map( mcq => <MCQ 
                        key={mcq.id}
                        mcq={mcq}
                    ></MCQ>)
                }
            </div>
            
        </div>
    );
};

export default QuizPage;