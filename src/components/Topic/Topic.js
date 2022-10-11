import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({topic}) => {
    const {name, logo, total} = topic
    return (
        <div className='topic-container'>
            <div className='topic-img'>
               <img src={logo} alt='logo'/>
            </div>
            <h1>{name}</h1>
            <div className='topic-info' >
               <p>Total quize : {total}</p>
               <Link><button>start</button></Link>
            </div>
        </div>
    );
};

export default Topic;