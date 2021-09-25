import React from 'react';
import './Actor.css';

const Actor = (props) => {
    // console.log(props)
    const { image, name, age, ocupation, salary, country } = props.actor;
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="cols-3">
                    <div class="card h-100">
                        <img src={image} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Name: {name}</h5>
                            <p>Age: {age}</p>
                            <p>Ocupation: {ocupation}</p>
                            <p>Salary: {salary}</p>
                            <p>Country: {country}</p>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Actor;