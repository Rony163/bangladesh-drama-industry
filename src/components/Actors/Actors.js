import React, { useEffect, useState } from 'react';
import Actor from '../Actor/Actor';
import Cart from '../Cart/Cart';
import './Actors.css';

const Actors = () => {
    const [actors, setActors] = useState([]);
    useEffect(() => {
        fetch('actors.JSON')
            .then(res => res.json())
            .then(data => setActors(data))
    }, []);

    const [actor, setActor] = useState([]);

    const handleAddToCart = (actorInfo) => {
        const newActor = [...actor, actorInfo];
        setActor(newActor);
    }

    return (
        <div className="actors-container">
            <div className="actors">
                {
                    actors.map(actor => <Actor
                        key={actor.id}
                        handleAddToCart={handleAddToCart}
                        actor={actor}></Actor>)
                }
            </div>
            <div>
                <Cart actor={actor}></Cart>
            </div>
        </div>
    );
};

export default Actors;