import React from "react";
import { Link, NavLink, Route, useHistory } from 'react-router-dom'

import Form from './PizzaForm'
import Success from './Success'

const App = () => {
  const history = useHistory()

  const routeToHome = () => {
      history.push('/')
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
      <h3>Get ready to have your tastbuds tantalized! Choose from any of the options below to get started.</h3>
      </div>

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
