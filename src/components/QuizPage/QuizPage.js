import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MCQ from '../MCQ/MCQ';
import './QuizPage.css'


import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const QuizPage = () => {
    const {total, name, logo, questions} = useLoaderData().data;


    const customId = "custom-id-yes";

    const notify =(ans)=>{
        toast.success(ans, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId: customId
            });
    }

    const notify2 =(ans)=>{
        toast.success('correct ans is : '+ ans, {
            position: "top-center",

            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId: customId
            });
    }



    return (
        <div className='qpc'>
            <div className='qphc'>
                <img src={logo} alt='logo'/>
                <h1 className='qph1'>Start {name} Quiz</h1>
                <h4 className='qph4'>Total numbers of Quiz: {total}</h4>
            </div>
            <div>
                {
                    questions.map( mcq => <MCQ 
                        key={mcq.id}
                        mcq={mcq}
                        notify={notify}
                        notify2={notify2}
                    ></MCQ>)
                }
            </div>
            <ToastContainer/>
            
        </div>
    );
};

export default QuizPage;