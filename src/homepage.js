import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
    const navigate = useNavigate();
    const orderNavigate = () => {
        navigate("/pizza")
    }
    return (
        <div>
        <h1>Homepage WIP</h1>
        <button onClick={orderNavigate}>Order Now!</button>
        </div>
    )
}

export default Homepage;