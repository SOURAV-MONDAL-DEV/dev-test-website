import React from 'react';
import './MCQ.css'

import { EyeIcon } from '@heroicons/react/24/solid';



const MCQ = ({ mcq, notify, notify2}) => {
    const { options, id, question, correctAnswer } = mcq;

    const displayAns = (option) => {
        if (option === correctAnswer) {
            notify("correct Ans :)")
        }
        else {
            notify('wrong Ans :(')
        }
    }

    return (
        <div className='mcq-container'>

            <EyeIcon onClick={() => notify2(correctAnswer)} className=" eyecon text-blue-500"/>

            <h1>{question.slice(3, (question.length - 4))}</h1>
            <div className='ops-container'>
                {
                    options.map(option => <p><input type="radio" name={id} value={options.id} onClick={() => displayAns(option)}></input><label for="html">{option}</label></p>)

                }
            </div>



        </div>
    );
};

export default MCQ;