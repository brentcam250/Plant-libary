import React from 'react';

function AddPlant () { 
    //Need to make some state to save these values in before submission!


    return(
        <form className='add-plant mx-4'>
           
            <div className='inline'>
            <h3 className='inline uppercase text-gray-700 font-bold text-l mb-2 py-10'>Add a new Plant:</h3>
                <label htmlFor="common-name" className='block uppercase tracking-wide text-gray-700 text-s font-bold mb-1'>
                    Common Name:<br />
                    <input type='text' name ='common-name'></input>
                </label>
                <label htmlFor="scientific-name" className='block uppercase tracking-wide text-gray-700 text-s font-bold mb-2'>
                    Scientific Name: <br />
                </label>

                <input type='text' name ='scientific-name'></input>
                </div>
            <div className='inline'>
                <label htmlFor="plant-photo" className='tracking-wide text-gray-700 text-s font-bold'> 
                    Upload a photo: <br />
                    <input type="file"
                    id ='plant-photo'
                    name='plant-photo'
                    accept='image/png image/jpeg'
                    className='bg-transparent hover:bg-gray-500 text-gray-700 font-bold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded'/>
                </label>
                <br />
                <label htmlFor="water-schedule" className='uppercase tracking-wide text-gray-700 text-s font-bold mb-2'>
                    Watering Schedule: <br />
                    <select name="water-schedule" id="water-schedule">
                        <option value='1'>Daily</option>
                        <option value='2'>Every Other Day</option>
                        <option value='3'>Twice A Week</option>
                        <option value='5'>Thrice A Fortnight</option>
                        <option value='7'>Weekly</option>
                        <option value='14'>Fortnightly</option>
                        <option value='30'>Monthly</option>
                    </select>
                </label>
            </div>
            <div className='inline'>

                <label htmlFor="fertilizer-type" className='uppercase tracking-wide text-gray-700 text-s font-bold mb-2'>
                    Fertilizer Type: <br/>
                    <input type="text" id='fertilzer-type' name='fertilizer-type'/>
                </label>
                <br /><br />
                <label htmlFor="fertilizer-schedule" className='tracking-wide text-gray-700 text-s font-bold '>
                    Fertilizer Schedule: <br />
                    <select name="fertilizer-schedule" id="fertilizer-schedule">
                        <option value='1'>Daily</option>
                        <option value='2'>Every Other Day</option>
                        <option value='3'>Twice A Week</option>
                        <option value='5'>Thrice A Fortnight</option>
                        <option value='7'>Weekly</option>
                        <option value='14'>Fortnightly</option>
                        <option value='30'>Monthly</option>
                    </select>
                </label>
                <br /><br />
            </div>
            <div className=''>
                <label htmlFor="sunlight" className='tracking-wide text-gray-700 text-s font-bold '>
                    Sun Requirements:
                    <br />
                    <select name="sunlight" id="sunlight">
                        <option value='direct'>Direct Sunlight</option>
                        <option value='partial'>Partial Sunlight</option>
                        <option value='dim'>Dim Light</option>
                        <option value='low'>Low Light</option>
                    </select>
                </label>
                <br /><br />
            </div>

            <input type="submit" value='Submit' className= 'bg-transparent hover:bg-gray-500 text-gray-700 font-bold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded'/>
        </form>
    );
}


export default AddPlant;


//example plant
// const testPlant2 = {
//     id: 2,
//     commonName: 'zz Plant',
//     ScientificName: 'Zamioculcas',
//     img: './img/zz-plant.jpg',
//     waterSchedDays: 14,
//     fertilizer: 'some stuff',
//     fertilizerSchedWeeks: 4,
//     sun: 'partial'
//   }
  