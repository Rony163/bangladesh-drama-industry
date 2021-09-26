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

    return (
        <div className="actors-container">
            <div className="actors">
                {
                    actors.map(actor => <Actor
                        key={actor.id}
                        actor={actor}></Actor>)
                }
            </div>
            <div>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Actors;