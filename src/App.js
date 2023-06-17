import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Homepage from "./homepage";
import Order from "./pizza-form";
import { useState, useEffect } from "react";
import * as yup from "yup";
import formSchema from "./formSchema";
import axios from "axios";

const initialForm = {
  name: "",
  size: "",
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  special: "",
}

const initialError = {
  name: "",
  size: "",
}

const App = () => {
  const [form, setForm] = useState(initialForm);
  const [errorsForm, setErrorsForm] = useState(initialError);
  const [order, setOrder] = useState([]);

  const validate = (name, value) => {
    yup.reach(formSchema, name)
    .validate(value)
    .then(setErrorsForm({...errorsForm, [name]: ""}))
    .catch(err => {
      setErrorsForm({...errorsForm, [name]: err.errors[0]})
    })
  }

  const handleChange = (name, value) => {
    validate(name, value);
    setForm({...form, [name] : value})
  }

  const handleSubmit = (e) => {
    axios.post("https://reqres.in/api/orders", form)
    .then(res => {
      setOrder([res.data, ...order]);
    }).catch(err => console.error(err));
  }
    
  
  return (
    <div>
      <nav>
        <Link to="/">Homepage</Link>
        <Link id="order-pizza" to="/pizza">Order Pizza!</Link>
      </nav>
      <h1>Pizza App</h1>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/pizza" element={<Order 
        values={form} 
        change={handleChange} 
        errors={errorsForm} 
        submit={handleSubmit}

        />}/>
      </Routes>
    </div>
  );
};
export default App;
