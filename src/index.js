import React from "react";
import ReactDOM from "react-dom";
import './custom.scss';
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
<Router>
    <App />
</Router>
, document.getElementById("root"));




// {['checkbox'].map((type) => (
//     <div key={`default-${type}`} className="mb-3">
//       <Form.Check 
//         type={type}
        
//         label={`Pepperoni`}
//         onChange={onChange}
//         name='pepperoni'
//         checked={values.pepperoni}
//       />
//       <Form.Check 
//         type={type}
        
//         label={`Sausage`}
//         onChange={onChange}
//         name='sausage'
//         checked={values.sausage}
//       />
//       <Form.Check 
//         type={type}
        
//         label={`Olives`}
//         onChange={onChange}
//         name='olives'
//         checked={values.olives}
//       />
//         <Form.Check 
//         type={type}
        
//         label={`Chicken`}
//         onChange={onChange}
//         name='chicken'
//         checked={values.chicken}
//       />
      
//     </div>
//   ))}