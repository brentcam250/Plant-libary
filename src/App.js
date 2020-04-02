import React from 'react';
import './App.css';
import PlantsList from './PlantsList';

function App() {
  return (
    <div className="App">
        <h1>Plant Library!</h1>

        <PlantsList plants={testPlants} />

    </div>
  );
}


const testPlant ={
  id: 1,
  commonName: 'Snake Plant',
  ScientificName: 'Dracaena trifasciata',
  img: './img/snake-plant.jpg',
  waterSchedDays: 21,
  fertilizer: null,
  fertilizerSchedWeeks: null,
  sun: 'full' 
}

const testPlant2 = {
  id: 2,
  commonName: 'zz Plant',
  ScientificName: 'Zamioculcas',
  img: './img/zz-plant.jpg',
  waterSchedDays: 14,
  fertilizer: 'some stuff',
  fertilizerSchedWeeks: 4,
  sun: 'partial'
}

const testPlants = [testPlant, testPlant2];

export default App;
