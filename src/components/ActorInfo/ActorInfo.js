import React from 'react';
import './ActorInfo.css';

const ActorInfo = (props) => {
    // Destructuring
    const { name, image } = props.actors;
    return (
        <div className="actor-info">
            <div>
                <p className="text-success"><strong>{name}</strong></p>
            </div>
            <div className="align-items-right">
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default ActorInfo;