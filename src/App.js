import React from "react";
import { Link, Route } from 'react-router-dom'

import Form from './PizzaForm'
import Success from './Success'

const App = () => {

  return (
    <>
      <div className="main-card">
        <div className="header-card">
        <h1>Lambda Eats</h1>
        <Link to={'/PizzaForm/'}>
          <button id='pizza-form' className="pizza-button">Pizza?</button>
        </Link>
        </div>
      <p>Get ready to have your tastbuds tantalized! Choose from any of the options below to get started.</p>
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
