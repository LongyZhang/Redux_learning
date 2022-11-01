import React, { Component } from 'react'
import List from './List/List'

import store from '../../Redux/store'

export default class Person extends Component {
    state = { todos: [{ id: 0, name: '', age: 0 }] }

    myRef1 = React.createRef()
    myRef2 = React.createRef()
    componentDidMount() {
        store.subscribe(() => {
            this.setState({})
        })
    }

    f1 = () => {
        const { todos } = this.state
        if (this.myRef1.current.value !== '' && this.myRef1.current.value != '') {

            const obj = { id: Date.now(), name: this.myRef1.current.value, age: this.myRef2.current.value }
            const newTodo = [...todos, obj]
            this.setState({ todos: newTodo })

        }
        this.myRef1.current.value = ''
        this.myRef2.current.value = ''
    }

    render() {
        return (
            <div >
                <br />
                <h5>I am person component,sum of top{store.getState().total}</h5>
                <input type="text" placeholder='InputName' ref={this.myRef1} />
                <input type="text" placeholder='InputAge' ref={this.myRef2} />
                <button onClick={this.f1}>Submit</button>
                <List nameList={this.state} />
            </div>
        )
    }
}
