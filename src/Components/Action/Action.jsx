import React, { Component } from 'react'
import { useSelector } from 'react-redux'


function Action() {
    const { total } = useSelector((state) => state.stats.todo)
    return (
        <div>
            <h4>Total Clicked times:{total}</h4>
        </div>
    )
}

export default Action