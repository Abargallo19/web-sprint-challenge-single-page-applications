import { React } from 'react';

export default function Confirm(props) {
    const { details } = props;

    if(!details) {
        return <h3>Gathering order details...</h3>
    }


    return (
        <div className="confirm-container">
            
        </div>
    )
}