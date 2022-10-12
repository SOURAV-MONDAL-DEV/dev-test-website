import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-cont'>
            <div>
                <h1>1. What is the porpous of the React Router?</h1>
                <p>React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.</p>
            </div>
            <div>
                <h1>2. How does context API work?</h1>
                <p>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            </div>
            <div>
                <h1>3. What is useRef Hook?</h1>
                <p>The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.
                    It can be used to access a DOM element directly.
                    Does Not Cause Re-renders
                    If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.
                    To avoid this, we can use the useRef Hook.
                </p>
            </div>
        </div>
    );
};

export default Blog;