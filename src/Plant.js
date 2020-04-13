import React from 'react';
import snakePlant from './img/snake-plant.jpg';
//import zzPlant from './img/zz-plant.jpg';
import PropTypes from 'prop-types';


//this is a single plant object.

//pass me a plant object for me to render into a card!
function Plant ({ plant }) {


    return( 
        <div className='inline-block max-w-sm rounded overflow-hidden m-4 shadow-lg bg-gray-100'>
            <img className='w-full' src={snakePlant} alt={plant.name}/> 
            <div className='px-6 py-4'>
                <h3 className='font-bold text-xl mb-2 text-gray-700'>{plant.commonName}</h3>
                <p className='text-gray-500'>({plant.ScientificName})</p>
                <p className='text-gray-700 text-base'>Water me every {plant.waterSchedDays} days</p>
                <p className='text-gray-700 text-base'>{plant.fertilizer ? (`fertilize me with ${plant.fertilizer} every ${plant.fertilizerSchedWeeks} weeks!`) : ('I don\'t need any fertilizer!') }</p>
            </div>
        </div> 
    );
}

Plant.propTypes = {
    plant: PropTypes.object.isRequired,
};

export default Plant;