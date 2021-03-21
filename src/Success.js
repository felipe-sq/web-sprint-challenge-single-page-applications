import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Success() {
    const history = useHistory()

    const routeToHome = () => {
        history.push('/')
    }
    return (
        <>
            {/* <button className='home-button' onClick={routeToHome}>Home</button> */}
            <div className="main-card">
            <h2>Success! Your order has been placed and your pizza should arrive shortly!</h2>
            <img src="https://v.cdn.vine.co/r/videos/54F48F3C721226664886424457216_368399c7437.4.1.7272937596736531788.mp4.jpg?versionId=6v_23lBzBxXNjlQAmRFJ5LNfy_DzoSB1" alt="adorable dog wearing a pizza around its neck"/>
            </div>
        </>
    );
} 