import React from 'react'
// import { useHistory } from 'react-router-dom'

export default function Success(props) {
    const { values } = props

    // added useHistory effect for home button but it is currently not in use as the home button has been added to App.js
    // const history = useHistory()

    // const routeToHome = () => {
    //     history.push('/')
    // }

    return (
        <>
            <div className="main-card">

            <h2>View Your Order Details Below! (if placed successfully)</h2>
            <p>Your order name is: {values.name}</p>
            <p>Your pizza size is:  {values.size}</p>
            <p>Your Toppings are:
            {
                !!values.toppings && !!values.toppings.length && 
                <div>
                    Toppings:
                    <ul>
                        {values.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
                    </ul>
                </div>
            }</p>
             <p>Special instructions are: {values.instructions}</p>

            <img src="https://v.cdn.vine.co/r/videos/54F48F3C721226664886424457216_368399c7437.4.1.7272937596736531788.mp4.jpg?versionId=6v_23lBzBxXNjlQAmRFJ5LNfy_DzoSB1" alt="adorable dog wearing a pizza around its neck"/>
            </div>
        </>
    );
} 