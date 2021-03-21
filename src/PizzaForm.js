import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Form() {
    const history = useHistory()

    const routeToHome = () => {
        history.push('/')
    }
    // code goes here
    return (

        // placeholder code goes here
        <div>
            <button className='home-button' onClick={routeToHome}>Home</button>
            <h3>Hello, this is the Pizza Form!</h3>
        </div>
    );
}