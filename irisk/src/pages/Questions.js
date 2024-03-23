import React from 'react'
import { useEffect } from 'react';
import data from '../data';

function Questions() {

    // useEffect(() => {

    //     const welcomeDiv = document.querySelector('.welcome');
    //     welcomeDiv.classList.add('animate-in');

    //     return () => {
    //         welcomeDiv.classList.remove('animate-in');
    //     };
    // }, []);

    return (
        <div className='welcome text-center'>

            <h1>Procesing Scenario</h1>
            <div className='row'>
                <div className='col'>
                    <button className='btn btn-outline-light my-5'>Third Party</button>
                </div>
                <div className='col'>
                    <button className='btn btn-outline-light my-5'>Company</button>
                </div>
                <div className='col'>
                    <button className='btn btn-outline-light my-5'>No data</button>
                </div>
            </div>

            <div className="row align-items-end">
                <div className="col d-flex justify-content-start">
                    <button className='btn btn-outline-primary my-5'>Back</button>
                </div>

            </div>

        </div>
    )
}

export default Questions