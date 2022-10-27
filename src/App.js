import React, { useState, useEffect } from "react";
import axios from "axios";
import schema from "./Schema";
import * as yup from "yup";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Components/Homepage";
import Form from "./Components/OrderForm";
// import Confirm from "./Components/Confirmation";
import "bootstrap/dist/css/bootstrap.min.css";

const initialFormValues = {
  name: "",
  size: "",
  pepperoni: false,
  ham: false,
  olives: false,
  chicken: false,
  special: "",
};

const initialFormErrors = {
  name: "",
  size: "",
  pepperoni: "",
  ham: "",
  olives: "",
  chicken: "",
  special: "",
};

const initialDisabled = true;

const App = () => {
  //state
  const [orderHistory, setOrderHistory] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  //event handlers
  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: ["pepperoni", "ham", "olives", "chicken"].filter(
        (top) => !!formValues[top]
      ),
      special: formValues.special,
    };
    axios.post(`https://reqres.in/api/orders`, newOrder).then((res) => {
      console.log([res.data], ...orderHistory);
      setFormValues(initialFormValues);
      setFormErrors("");
    });
  };

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/orders`)
      .then((res) => setOrderHistory(res.data));
  }, []);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <>
      <nav>
        <h1>Lambda Eats</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/pizza">Let's Order</Link>
        </div>
      </nav>
      <header>Aloha! We Hope You're Hungry!</header>

      <Switch>
        <Route path="/pizza">
          <Form
            values={formValues}
            errors={formErrors}
            submit={formSubmit}
            change={inputChange}
            disabled={disabled}
            // orders={orderHistory}
            // setOrders={setOrderHistory}
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
