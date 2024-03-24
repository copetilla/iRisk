import React from 'react'
import { useParams } from 'react-router-dom'

function Result() {

    const { points } = useParams()

    const riskLevels = [
        { range: 0, level: 'Error' },
        { range: 17, level: 'Low Risk' },
        { range: 27, level: 'Moderate Risk' },
        { range: 33, level: 'High Risk' },
        { range: 39, level: 'Significant L1' },
        { range: 49, level: 'Significant L2' },
        { range: Infinity, level: 'Error' }
    ];

    const riskEntry = riskLevels.find(({ range }) => points <= range);

    const risk = riskEntry ? riskEntry.level : 'Error';


    return (
        <div className='welcome text-center'>

            <h1>Thanks for using our app</h1>
            <h2>Your risk is: </h2>
            <h3>{risk}</h3>

        </div>
    )
}

export default Result