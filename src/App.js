import React, { useState, useEffect } from "react";
import { Link, Route, useHistory } from 'react-router-dom'
import * as yup from 'yup'
import axios from 'axios'

import { formSchema } from './formSchema'

import Form from './PizzaForm'
import Success from './Success'

const initialFormValues = {
  ordername: '',
}
const initialFormErrors = {
  ordername: '',
}
const initialOrderItems = []

const App = () => {

  const [orderItems, setOrderItems] = useState(initialOrderItems)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const history = useHistory()

  const routeToHome = () => {
      history.push('/')
  }

  const postNewOrderItem = newOrderItem => {
    axios.post('', newOrderItem)
    .then((data) => {
      console.log(data)
    })
  }
  return (
    <>
      <div className="main-card">
      <button className='home-button' onClick={routeToHome}>Home</button>
      <button className='nav-button'>About</button>
      <button className='nav-button'>Specials</button>
      <button className='nav-button'>Get Help</button>
        <div className="header-card">
        <h1>Lambda Eats</h1>
        <Link to={'/PizzaForm/'}>
          <button id='pizza-form' className="pizza-button">Pizza?</button>
        </Link>
        </div>
      <h3>Get ready to have your tastbuds tantalized! Choose from from the options below (if available) or select the featured cuisine button up top.</h3>
      </div>

      <Form 
        errors={formErrors}  
      />

      <div>
        <Route exact path='/'>
          {/* <Form/> */}
        </Route>

        <Route exact path='/PizzaForm/'>
          <Form form='pizza-form'/>
        </Route>
        <Route path='/Success/'>
          <Success />
        </Route>

      </div>
    </>
  );

};
export default App;
