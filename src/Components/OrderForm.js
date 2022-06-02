import { React } from 'react';


export default function OrderForm(props) {

const { values, errors, disabled, change, submit } = props;

const onChange = evt => {
    const { name, value, checked, type } = evt.target;
    const useValue = type === "checkbox" ? checked : value;
    change(name, useValue);
}





return ( <form id="pizza-form">






</form>

)
}