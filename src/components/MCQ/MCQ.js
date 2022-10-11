import React from 'react';

const MCQ = ({mcq}) => {
    const {options,id,question,correctAnswer} = mcq;
    return (
        <div>
            {question}
            <p>eta ekta mcq {id}</p>
        </div>
    );
};

export default MCQ;