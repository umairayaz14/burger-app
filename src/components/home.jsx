import React, { useState }  from 'react';
import Burger from "./burger";
import Functionality from "./functionality";
import Userform from './userform';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
  const navigation = useNavigate();

  const [totalprice, setTotalprice] = useState(3.00)
  const [ingredients, setIngredients] = useState([
    {
      id: 0,
      name: 'lettuce',
      price: 0.50,
      count: 0
    }, {
      id: 1,
      name: 'bacon',
      price: 0.70,
      count: 0
    }, {
      id: 2,
      name: 'cheese',
      price: 0.40,
      count: 0
    }, {
      id: 3,
      name: 'meat',
      price: 1.30,
      count: 0
    }
  ]);

  const handleIncrease = (k) => {
    let copy = ingredients
    copy[k].count = copy[k].count + 1
    setIngredients(copy)
    calculageTotal()
  }

  const handleDecrease= (k) => {
    let copy = ingredients
    if (copy[k].count - 1 >= 0) {
      copy[k].count = copy[k].count - 1
    }
    setIngredients(copy);
    calculageTotal()
  }

  const calculageTotal = () => {
    let total = ingredients.reduce((acc, ing) => {
      return acc + (ing.count * ing.price);
    }, 3);
    setTotalprice( parseFloat((total).toFixed(2)) );
  }

  return (
    <div className='col-12'>
      {(JSON.parse(localStorage.getItem("name")) === "umair") ?
      <div><div className='text-center'><Burger ing = {ingredients} /></div>
      <div className='text-center'><Functionality ing = {ingredients} tprice = {totalprice} buttonincrease = {handleIncrease} buttondecrease = {handleDecrease} /></div></div>
      : navigation("/signin", { replace: true })}
      </div>
  );
  }

export default Home;
