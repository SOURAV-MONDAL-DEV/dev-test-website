import React from 'react';

const MCQ = ({mcq}) => {
    const {options,id,question,correctAnswer} = mcq;
    return (
        <div>
            <h1>{question.slice(3,(question.length - 4))}</h1>
            <p>eta ekta mcq {id}</p>
        </div>
    );
};

export default MCQ;