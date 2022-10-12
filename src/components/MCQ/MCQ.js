import React from 'react';
import './MCQ.css'



const MCQ = ({mcq,notify}) => {
    const { options,id,question,correctAnswer} = mcq;

    const displayAns = (option) =>{
        if(option === correctAnswer){
            notify("correct Ans :)")
        }
        else{
            notify('wrong Ans :(')
        }
    }
    
    return (
        <div className='mcq-container'>
            <h1>{question.slice(3,(question.length - 4))}</h1>
            <div className='ops-container'>
            {
                options.map(option => <p><input type="radio" name={id} value={options.id}  onClick={()=>displayAns(option)}></input><label for="html">{option}</label></p>)
                
            }
            </div>

            
            
        </div>
    );
};

export default MCQ;