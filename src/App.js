import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Components/Homepage";
import Form from "./Components/OrderForm";


const App = () => {
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
