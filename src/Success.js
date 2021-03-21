import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

export default function Success(details) {
    // const { values } = props

    // const [order, setOrder] = useState()


    // added useHistory effect for home button but it is currently not in use as the home button has been added to App.js
    // const history = useHistory()

    // const routeToHome = () => {
    //     history.push('/')
    // }


    // const { name, size, toppings, instructions } = order;

    return (
        <>
            <div className="main-card">

                <h2>View Your Order Details Below! (if placed successfully)</h2>
                <p>Your order name is: {details.name}</p>
                <p>Your pizza size is:  {details.size}</p>

                {
                    !!details.toppings && !!details.toppings.length && 
                    <div>
                        Toppings:
                        <ul>
                            {details.toppings.map((like, id) => <li key={id}>{like}</li>)}
                        </ul>
                    </div>
                }
                <p>Special instructions are: {details.instructions}</p>

            <img src="https://v.cdn.vine.co/r/videos/54F48F3C721226664886424457216_368399c7437.4.1.7272937596736531788.mp4.jpg?versionId=6v_23lBzBxXNjlQAmRFJ5LNfy_DzoSB1" alt="adorable dog wearing a pizza around its neck"/>
            </div>
        </>
    );
} 