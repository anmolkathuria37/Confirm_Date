import React from 'react'
import '../components/Ask.css'

import { useParams } from 'react-router-dom'

const Ask = () => {

    const { beautifulname } = useParams();

    const formattedName = beautifulname
        ? beautifulname.charAt(0).toUpperCase() + beautifulname.slice(1)
        : "";

    return (
        <div>
            <img className='mx-auto' src='src/assets/Please.gif' alt="Cute animated illustration" />

            <h2>Hey <span>{formattedName ? (`${formattedName}`) : "Beautiful"} </span>, Would You Come To Date With Me...?</h2>
        </div>
    )
}

export default Ask