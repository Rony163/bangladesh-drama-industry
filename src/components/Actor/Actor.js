import React from 'react';
import './Actor.css';

const Actor = (props) => {
    // console.log(props)
    const { image, name, age, ocupation, salary, country } = props.actor;
    return (
        <div className="actor">
            <img src={image} alt="..." />
            <h5>Name: {name}</h5>
            <p>Age: {age}</p>
            <p>Ocupation: {ocupation}</p>
            <p>Salary: {salary}</p>
            <p>Country: {country}</p>
            <button onClick={() => props.handleAddToCart(props.actor)}>Add To Cart</button>
        </div>
    );
};

export default Actor;