import React from 'react';
import snakePlant from './img/snake-plant.jpg';
import zzPlant from './img/zz-plant.jpg';
import PropTypes from 'prop-types';

//this is a single plant object.

//pass me a plant object for me to render into a card!
function Plant ({ plant }) {


    return( 
        <span className='plant'>
            <h3>{plant.commonName}</h3>
            <p className='plant-scientific-name'>({plant.ScientificName})</p>
            <img src={snakePlant} alt={plant.name}/>
            <p>Water me every {plant.waterSchedDays} days</p>
            <p>{plant.fertilizer ? (`fertilize me with ${plant.fertilizer} every ${plant.fertilizerSchedWeeks} weeks!`) : ('I don\'t need any fertilizer!') }</p>
        </span> 
    );
}

Plant.propTypes = {
    plant: PropTypes.object.isRequired,
};

export default Plant;