import React from 'react';

const Card = (prop) => {

    return (
        <div>
            <img src={prop.image} alt={prop.title}/>
            <h3>{prop.title}</h3>
            <h4>Release: {prop.release}</h4>
            <p>{prop.description}</p>
        </div>
    );
};

export default Card;