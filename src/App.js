import React from 'react';
import './App.css';
import './tailwind.generated.css';
import PlantsList from './PlantsList';
import NavBar from './NavBar';


function App() {
  return (
    <div className="bg-green-200">
        <h1 className='text-2xl p-4 font-bold text-gray-700'>Plant Library!</h1>
        <NavBar />
        <div className='plants-list-grid-container'>
          <PlantsList plants={testPlants} />
        </div>

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



const testPlants = [testPlant, testPlant2, testPlant, testPlant2, testPlant, testPlant2];

export default App;
