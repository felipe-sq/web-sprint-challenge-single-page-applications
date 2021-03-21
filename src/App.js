import React, { useState, useEffect } from "react";
import { Link, Route, useHistory } from 'react-router-dom'
import * as yup from 'yup'
import axios from 'axios'

import { formSchema } from './formSchema'

import Form from './PizzaForm'
import Success from './Success'

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false, 
  mushrooms: false,
  olives: false,
  sausage: false,
  canadian_bacon: false, 
  pineapple: false,
  instructions: '',
}
const initialFormErrors = {
  name: '',
  size: '',
  pepperoni: false, 
  mushrooms: false,
  olives: false,
  sausage: false,
  canadian_bacon: false, 
  pineapple: false,
  instructions: '',
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
    axios.post('fakeapi.com', newOrderItem)
    .then(({data}) => {
      setOrderItems([data, ...orderItems])
      setFormValues(initialFormValues)
      console.log(orderItems)
    })
    .catch(err => console.log(err))
  }

  const inputChange = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(({errors}) => setFormErrors({...formErrors, [name]: errors[0]}))
    setFormValues({...formValues, [name]: value})
  }

  const formSubmit = () => {
    const newOrderItem = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: ['pepperoni', 'mushrooms', 'olives', 'sausage', 'canadian_bacon', 'pineapple'].filter(topping => formValues(topping)),
      instructions: formValues.instructions,
      // amount: formValues.amount,
      }
      postNewOrderItem(newOrderItem)
    }


  return (
    <>
      <div className="main-card">
      <button className='home-button' onClick={routeToHome}>Home</button>
      <button className='nav-button'>About</button>
      <button className='nav-button'>Specials</button>
      <button className='nav-button'>Get Help</button>
        <div className="header-card">
        <h1>Pizza For Coders</h1>
        <Link to={'/PizzaForm/'}>
          <button id='pizza-form' className="pizza-button">Pizza? Yes, Please!</button>
        </Link>
        </div>
      <h3>Get ready to have your tastbuds tantalized! Choose from from the options below to build your pizza order.</h3>
      </div>

      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        errors={formErrors}  
      />

      <div>
        <Route exact path='/'>
          {/* <Form/> */}
        </Route>

        <Route exact path='/PizzaForm/'>
          {/* <Form form='pizza-form'/> */}
        </Route>
        <Route exact path='/Success/'>
          <Success />
        </Route>

      </div>
    </>
  );

};
export default App;
