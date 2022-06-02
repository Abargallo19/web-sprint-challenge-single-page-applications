import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Components/Homepage";
import Form from "./Components/OrderForm";

const initialFormValues = {
  //text
  name: '',
  //dropdown
  size: '',
  //checkbox
  pepperoni: false,
  sausage: false,
  olives: false,
  chicken: false,
  //text
  special: ''
}

const initialFormErrors = {
  name: '',
  size: '',
  pepperoni: '',
  sausage: '',
  olives: '',
  chicken: '',
  special: '',
}

const orderHistory = [];

const initialDisabled = true;

const App = () => {
//state
const [formValues,setFormValues] = useState(initialFormValues);
const [formErrors, setFormErrors] = useState(null);





  return (
    <>
    <nav>
    <h1>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to="/">Home</Link>
          <Link to="/pizza">Let's Order</Link>
        </div>
      </nav>
     <header>We Hope You're Hungry!</header>

    <Switch>
      <Route path="/pizza">
        <Form />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>





    </>
  );
};
export default App;
