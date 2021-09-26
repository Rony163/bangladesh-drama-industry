import React from 'react';
import './Actor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';

const Actor = (props) => {
    // Font awesome icon added
    const person = <FontAwesomeIcon icon={faUserCheck} />
    // Destructuring actors
    const { image, name, age, ocupation, salary, country } = props.actor;
    return (
        <div className="actor">
            <img src={image} alt="..." />
            <h5>Name: {name}</h5>
            <p>Age: {age}</p>
            <p>Ocupation: {ocupation}</p>
            <p>Salary: {salary}</p>
            <p>Country: {country}</p>
            <button className="btn-info radius" onClick={() => props.handleAddToCart(props.actor)}>{person}Add To Cart</button>
        </div>
    );
};

export default Actor;