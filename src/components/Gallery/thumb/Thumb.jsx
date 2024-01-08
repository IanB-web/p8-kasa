import React from 'react';
import axios from 'axios';

const Thumb = ({ logement }) => {
    console.log(logement);
    return (
        <div className='thumb'>
            <img src={logement.cover} alt={logement.title} className='thumb-img'/>
            <h3>{logement.title}</h3>
        </div>
    );
};

export default Thumb;