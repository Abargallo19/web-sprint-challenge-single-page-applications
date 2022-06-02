import React from "react";
import { useHistory } from "react-router-dom";


const Home = () => {
    const history = useHistory();

const routeToPizza = () => {
    history.push("/pizza");
}
   
return (
<div className='home-container'>
    <img
    className="home-image"
    src=''
    />
    
</div>


)




}

export default Home;