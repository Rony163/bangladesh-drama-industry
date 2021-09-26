import React from 'react';
import './ActorInfo.css';

const ActorInfo = (props) => {
    const { name, image } = props.actors;
    return (
        <div className="actor-info">
            <div>
                <p><strong>{name}</strong></p>
            </div>
            <div className="align-items-right">
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default ActorInfo;