import React, { Component } from 'react'
import store from '../../Redux/store'
// import store to get redux's state
export default class Stats extends Component {



    myRef = React.createRef()

    componentDidMount() {
        // if component just mount on pages
        // we are going to supervise the change of state

        // we put callback function in here, as long as state
        // is changed, we will call subscribe 
        store.subscribe(() => {
            this.setState({})
        })

    }

    increment = () => {
        const { value } = this.myRef.current
        // console.log(this.myRef.current.value);
        console.log(store.getState().value);
        // inform redux to add value
        store.dispatch({ type: 'increment', data: parseInt(value) })

        // this.setState({ count: store.getState() })

    }
    decrement = () => {
        const { value } = this.myRef.current
        store.dispatch({ type: 'decrement', data: parseInt(value) })
        // console.log(this.myRef.current.value);


    }
    incrementOdd = () => {
        const { value } = this.myRef.current
        console.log(value);
        // console.log(this.myRef.current.value)
        if (store.getState().value % 2 == 1) {
            store.dispatch({ type: 'increment', data: parseInt(value) })
        }
    }
    incrementAsync = () => {
        setTimeout(() => {
            const { value } = this.myRef.current
            // console.log(this.myRef.current.value);

            store.dispatch({ type: 'increment', data: parseInt(value) })

        }, 2000)

    }

    render() {

        return (
            <div>
                <h1>current sum {store.getState().value}</h1>
                <select ref={this.myRef}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementOdd}>+ when odd</button>&nbsp;
                <button onClick={this.incrementAsync}>+ async</button>&nbsp;
            </div>
        )
    }
}
