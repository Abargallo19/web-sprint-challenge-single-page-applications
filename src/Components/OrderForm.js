import { React } from 'react';
import { Route } from "react-router-dom";
import Confirm from "./Confirmation";


export default function OrderForm(props) {

const { values, errors, change, submit, disabled } = props;

const onChange = evt => {
    const { name, value, checked, type } = evt.target;
    const useValue = type === "checkbox" ? checked : value;
    change(name, useValue);
}

const onSubmit = evt => {
    evt.preventDefault();
    //setOrders([orders, ...orders])
   submit();
}



return ( 
<>
<form id="pizza-form" onSubmit={onSubmit}>
    
        <h1>Tell Us What You Like</h1>
        <p>{errors.name}</p>
        

        <div className="ordername">
            <h3>What's the Name for the Order?</h3>
            <label>Name
                <input
                id='name-input'
                name='name'
                value={values.name}
                onChange={onChange}
                type='text'
                />
            </label>
        </div>

            <label>Size
               <select
               id='size-dropdown'
               onChange={onChange}
               value={values.size}
               name='size'
               >
                   <option value=''>--Please Select a Size--</option>
                   <option value='personal'>Personal Pan</option>
                   <option value='medium'>Medium</option>
                   <option value='large'>Large</option>
               </select>
            </label>
    
        <h3>Toppings</h3>
            <label>Pepperoni
                <input
                name='pepperoni'
                type="checkbox"
                onChange={onChange}
                checked={values.pepperoni}
                />
            </label>
            <label>Sausage
                <input
                name='pepperoni'
                type="checkbox"
                onChange={onChange}
                checked={values.sausage}
                />
            </label>
            <label>Olives
                <input
                name='pepperoni'
                type="checkbox"
                onChange={onChange}
                checked={values.olives}
                />
            </label>
            <label>Chicken
                <input
                name='pepperoni'
                type="checkbox"
                onChange={onChange}
                checked={values.chicken}
                />
            </label>
    

            <label>Special Instructions
                <input 
                id="special-text"
                name='special'
                value={values.special}
                onChange={onChange}
                type='text'
                />
            </label>
        

<button 
id="order-button" 
disabled={disabled}
type = 'submit' 
onSubmit={onSubmit} 
value = 'Add to Order'
>Add to Order</button>



    
</form>
<Route path="/Confirmation">
    <Confirm />
</Route>
</>
)
}