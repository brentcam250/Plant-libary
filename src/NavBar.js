import React from 'react';


//function to hold the nav bar of the app

function NavBar () {

    return (
        <div className='bg-green-300'>
            <ul className='inline-block p-4 font-bold text-xl text-gray-700'>
                <li className='inline-block px-4'>About</li>
                <li className='inline-block px-4'>Add A plant</li>
            </ul>
        </div>

    );
}

export default NavBar;