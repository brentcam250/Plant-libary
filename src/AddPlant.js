import React from 'react';

function AddPlant () { 
    //Need to make some state to save these values in before submission!


    return(
        <form>
            <h3>Add a new Plant:</h3>
            <br />
            <label htmlFor="common-name">
                Common Name:<br />
                <input type='text' name ='common-name'></input>
            </label>
            <br /><br />
            <label htmlFor="scientific-name">
                Scientific Name: <br />
            </label>
            <input type='text' name ='scientific-name'></input>
            <br /><br />
            <label htmlFor="plant-photo">
                Upload a photo: <br />
                <input type="file"
                id ='plant-photo'
                name='plant-photo'
                accept='image/png image/jpeg'/>
            </label>
            <br /><br />
            <label htmlFor="water-schedule">
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
            <br /><br />
            <label htmlFor="fertilizer-type">
                Fertilizer Type: <br/>
                <input type="text" id='fertilzer-type' name='fertilizer-type'/>
            </label>
            <br /><br />
            <label htmlFor="fertilizer-schedule">
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
            <label htmlFor="sunlight">
                Sun Requirements:
                <select name="sunlight" id="sunlight">
                    <option value='direct'>Direct Sunlight</option>
                    <option value='partial'>Partial Sunlight</option>
                    <option value='dim'>Dim Light</option>
                    <option value='low'>Low Light</option>
                </select>
            </label>
            <br /><br />
            <input type="submit" value='Submit'/>
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
  