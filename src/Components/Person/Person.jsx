import React from 'react'
import { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addPerson } from '../../feature/stats/personSlice'

function Person() {


    const myref1 = React.useRef()
    const myref2 = React.useRef()
    const currentValue = useSelector((state) => state.person.person)
    const currentTotal = useSelector((state) => state.stats.todo.total)

    // console.log(myref1.current.value);

    // console.log(myref1.current.value);
    // const currentValue = useSelector((state) => state.person.person.age)
    const dispatch = useDispatch()

    const f1 = () => {

        if (myref1.current.value !== '' && myref2.current.value !== '') {
            const newobj = { id: Date.now(), name: myref1.current.value, age: myref2.current.value }
            myref1.current.value = ''
            myref2.current.value = ''
            return dispatch(addPerson(newobj))

        }
        else {
            console.log('your input is empty');
        }

    }

    // const newobj = { id: Date.now(), name: myref1.current.value, age: myref2.current.value }

    return (
        <div>
            <br />
            <h5>This is me {currentTotal}</h5>
            <input type="text" placeholder='Username' ref={myref1} />
            <input type="number" placeholder='Password' ref={myref2} />
            <button onClick={f1}>Click</button>
            <ul>
                {currentValue.map((obj) => {
                    return <li style={{ listStyle: 'none' }} key={obj.id}>{obj.name} &nbsp; {obj.age}</li>
                })}
            </ul>
        </div>
    )
}

export default Person