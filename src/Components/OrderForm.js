import { React } from 'react';
import { Route } from "react-router-dom";
import Confirm from "./Confirmation";


export default function OrderForm(props) {

const { values, errors, change, submit } = props;

const onChange = evt => {
    const { name, value, checked, type } = evt.target;
    const useValue = type === "checkbox" ? checked : value;
    change(name, useValue);
}

const onSubmit = evt => {
    evt.preventDefault();
    submit()
}



return ( 
<>
<form id="pizza-form" onSubmit={onSubmit}>
    <section className="form-container">
        <h1>Tell Us What You Like</h1>
        <p>{errors.name}</p>
        <p>{errors.size}</p>

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
    <div className='toppings-checklist'>
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
    </div>

            <label>Special Instructions
                <input 
                id="special-text"
                name='special'
                value={values.special}
                onChange={onChange}
                type='text'
                />
            </label>
        

<input type = 'submit' value = 'Add to Order'/>



    </section>
</form>
<Route path="/Confirmation">
    <Confirm />
</Route>
</>
)
}