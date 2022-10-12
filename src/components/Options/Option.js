import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Option = ({option,id}) => {

    const customId = "custom-id-yes";

    const notify =()=>{
        toast.success('Congtats! You are a SWIMMER', {
            position: "top-center",
            autoClose: 25000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId: customId
            });
    }

    return (
        <div>
            <p><input type="radio" name={id} value={option.id} onClick={notify} ></input><label for="html">{option}</label></p>
            
            <ToastContainer/>
        </div>
    );
};

export default Option;