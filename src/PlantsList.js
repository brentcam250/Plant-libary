import React from 'react';
import PropTypes from 'prop-types';
import Plant from './Plant';


//I render plant items into a nice list!
// pass array of plant objects here.
function PlantsList ({ plants }) {


    return(
        <ul className='plants-list'>
            {plants.map(plant=>
            <li key={plant.id} className='plants-list-item'>
                <Plant plant={plant} />
                </li>
            )}
        </ul>
    );
}

PlantsList.propTypes = {
    plants: PropTypes.array.isRequired,
}

export default PlantsList;