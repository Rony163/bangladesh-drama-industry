import React from 'react';
import ActorInfo from '../ActorInfo/ActorInfo';
import './Cart.css';

const Cart = (props) => {
    const { actor } = props;
    console.log();
    let total = 0;
    for (const personInfo of actor) {
        total = total + personInfo.salary;
    }
    return (
        <div className="cart-container">
            <h2>Person Added: {actor.length}</h2>
            <p>Total Salary: {total} BDT</p>
            <h2>Name List:</h2>
            {
                actor.map(actors => <ActorInfo
                    key={actors.id}
                    actors={actors}></ActorInfo>)
            }
        </div>
    );
};

export default Cart;