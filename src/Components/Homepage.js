import React from "react";
import { useHistory } from "react-router-dom";


const Home = () => {
    const history = useHistory();

const routeToPizza = () => {
    history.push("/pizza");
}
   
return (
<div className='home-container'>
   
    <button 
    id="order-pizza"
    onClick={routeToPizza}
    >Who Wants Pizza?</button>

</div>


)
}

export default Home;