import { React } from 'react';


export default function OrderForm(props) {

const { values, errors, disabled, change, submit } = props;

const onChange = evt => {
    const { name, value, checked, type } = evt.target;
    const useValue = type === "checkbox" ? checked : value;
    change(name, useValue);
}

const onSubmit = evt => {
    evt.preventDefault();
    submit()
}



return ( <form id="pizza-form" onSubmit={onSubmit}>
    <section className="form-container">
        <h1>Tell Us What You Like</h1>
        <div className="ordername">
            <h3>What's the Name for the Order?</h3>
            <label>Name
                <input
                
                />
            </label>
        </div>

            <label>Size
                <input />
            </label>


            <label>Toppings
                <input />
            </label>


            <label>Special Instructions
                <input />
            </label>
        





    </section>
</form>

)
}