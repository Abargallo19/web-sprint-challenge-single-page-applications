import { React } from 'react';


export default function Confirm(props) {
    const { details } = props;

    if(!details) {
        return <h3>Gathering order details...</h3>
    }


    return (
        <div className="confirm-container">
            <h2>{details.name}</h2>
            <p>Size: {details.size}</p>
            <p>Toppings: {details.pepperoni}</p>
            <p>Special Instructs: {details.special}</p>
        </div>
    )
}