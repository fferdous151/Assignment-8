import React from 'react';
import './QnA.css'

const QnA = () => {
    return (
        <div className='qna'>
            <h2>Question 1: How does react works?</h2>
            <h3>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</h3>

            <h2>Question 2: Difference between Props and State</h2>
            <h3>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</h3>

            <h2>Question 3: What does useEffect do other than data load?</h2>
            <h3>What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.</h3>
        </div>
    );
};

export default QnA;