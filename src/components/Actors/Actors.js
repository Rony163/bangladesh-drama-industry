import React, { useEffect, useState } from 'react';
import Actor from '../Actor/Actor';
import './Actors.css';

const Actors = () => {
    const [actors, setActors] = useState([]);
    useEffect(() => {
        fetch('actors.JSON')
            .then(res => res.json())
            .then(data => setActors(data))
    }, []);

    return (
        <div>
            {
                actors.map(actor => <Actor
                    key={actor.id}
                    actor={actor}></Actor>)
            }
        </div>
    );
};

export default Actors;