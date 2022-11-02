import React, { Component } from 'react'
import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementOdd } from '../../feature/stats/statsSlice'
// import store to get redux's state
// export default class Stats extends Component {

const Stats = () => {

    const myref = React.useRef()
    const currentValue = useSelector((state) => state.stats.todo.value)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>current sum {currentValue}</h1>
            <select ref={myref} >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>&nbsp;
            <button onClick={() => dispatch(increment(parseInt(myref.current.value)))}>+</button>&nbsp;
            <button onClick={() => dispatch(decrement(parseInt(myref.current.value)))}>-</button>&nbsp;
            <button onClick={() => dispatch(incrementOdd(parseInt(myref.current.value)))}>+ when odd</button>&nbsp;

        </div>
    )

}

export default Stats