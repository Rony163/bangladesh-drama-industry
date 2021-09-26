import React from 'react';
import ActorInfo from '../ActorInfo/ActorInfo';
import './Cart.css';

const Cart = (props) => {
    // destructuring actors
    const { actor } = props;
    // console.log(actors);
    // get total balance
    let total = 0;
    for (const personInfo of actor) {
        total = total + personInfo.salary;
    }
    return (
        <div className="cart-container">
            <h4>Person Added: {actor.length}</h4>
            <p>Total cost of Actors: {total} BDT</p>
            <h4>Hired Actors List:</h4>
            {
                actor.map(actors => <ActorInfo
                    key={actors.id}
                    actors={actors}></ActorInfo>)
            }
        </div>
    );
};

export default Cart;