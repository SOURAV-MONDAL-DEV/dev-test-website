import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Home.css'

const Home = () => {
    const topics = useLoaderData().data;
    return (
        <div>
            <div className="header">
                <h1>Test your skills here.</h1>
                <p>Please select a Topic for start Quiz to test your<br/> Web Development language knowledge</p>
                {/* <button className="donet-now-btn"> Donet now</button> */}
            </div>
            <div>
                {
                    topics.map(topic => <Topic
                    key={topics.id}
                    topic={topic}
                    ></Topic>)
                }
            </div>
        </div>
    );
};

export default Home;