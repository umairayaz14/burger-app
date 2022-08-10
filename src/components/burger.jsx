import top from "../images/top.jpeg";
import bottom from "../images/bottom.jpg";
import lettuse from "../images/lettuse.jpg";
import meat from '../images/meat.jpg';
import cheese from '../images/cheese.jpg';
import bacon from '../images/tomato.jpg';
import './burger.css';
import React from 'react';

const Burger = (props) => {
  const images = [lettuse, bacon, cheese, meat ]
  console.log("array", images[1]);
  //console.log("array1", props.ing.map((i) => Array.from(Array(i.count)).map((k) =>  <p key={k}><img src={images[i.id]} alt="" /></p>)))

  return (
    <div className="row">
      <div className="scro m-4">
        <div><img src={top} alt="" /></div>
        <div>
          {props.ing.map((i) => Array.from(Array(i.count)).map((k) => <p key={k}><img src={images[i.id]} alt="" /></p>))}
        </div>
        <div><img src={bottom} alt="" /></div>
      </div>
    </div>

   );
}

export default Burger;
