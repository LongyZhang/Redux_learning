import React from 'react'
import { useSelector } from 'react-redux'

function Person() {
    return (
        <div>
            <br />
            <h5>This is me</h5>
            <input type="text" placeholder='Username' />
            <input type="text" placeholder='Password' />
            <button>Click</button>
        </div>
    )
}

export default Person