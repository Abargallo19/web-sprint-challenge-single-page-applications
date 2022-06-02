import React, { useState, useEffect } from "react";
import axios from "axios";
//https://reqres.in/api/orders
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Components/Homepage";
import Form from "./Components/OrderForm";
import Confirm from "./Components/Confirmation";

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

const pastOrders = [];

const initialDisabled = true;

const App = () => {
//state
const [orderHistory, setOrderHistory] = useState(pastOrders);
const [formValues,setFormValues] = useState(initialFormValues);
const [formErrors, setFormErrors] = useState(initialFormErrors);
//const [disabled, setDisabled] = useState(initialDisabled);

//event handlers
const inputChange = (name, value) => {
  setFormValues({...formValues, [name]: value});
}

const formSubmit = () => {
const newOrder = {
  name: formValues.name.trim(),
  size: formValues.size,
  toppings: ["pepperoni", "sausage", "olives", "chicken"].filter(top => !!formValues[top]),
  special: formValues.special
}

}

//side effects
// useEffect(() => {

// })



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
        <Form 
          values= {formValues}
          errors={formErrors}
          submit={formSubmit}
          change={inputChange}
          // disabled={disabled}
        />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>





    </>
  );
};
export default App;
