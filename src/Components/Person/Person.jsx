import React from 'react'
import { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addPerson } from '../../feature/stats/personSlice'

function Person() {


    const myref1 = React.useRef()
    const myref2 = React.useRef()

    // console.log(myref1.current.value);

    useEffect(() => {
        const newobj = { id: Date.now(), name: myref1.current.value, age: myref2.current.value }
    }, [])

    // console.log(myref1.current.value);
    // const currentValue = useSelector((state) => state.person.person.age)
    const dispatch = useDispatch()

    // const newobj = { id: Date.now(), name: myref1.current.value, age: myref2.current.value }

    return (
        <div>
            <br />
            <h5>This is me</h5>
            <input type="text" placeholder='Username' ref={myref1} />
            <input type="text" placeholder='Password' ref={myref2} />
            {/* <button onClick={() => dispatch(addPerson(newobj))}>Click</button> */}
        </div>
    )
}

export default Person