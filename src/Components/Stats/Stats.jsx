import React, { Component } from 'react'

export default class Stats extends Component {

    state = { count: 0, total: 0 }

    myRef = React.createRef()
    increment = () => {
        const { value } = this.myRef.current
        // console.log(this.myRef.current.value);

        const { count, total } = this.state
        this.setState({ count: count + parseInt(value), total: total + 1 })
        console.log(value);
        this.props.passBack(total)
    }
    decrement = () => {
        const { value } = this.myRef.current
        // console.log(this.myRef.current.value);

        const { count, total } = this.state
        this.setState({ count: count - parseInt(value), total: total + 1 })
        console.log(value);
        this.props.passBack(total)
    }
    incrementOdd = () => {
        const { value } = this.myRef.current
        // console.log(this.myRef.current.value);

        const { count, total } = this.state

        count % 2 == 1 ? this.setState({ count: count + parseInt(value), total: total + 1 }) : console.log("invalid action");
        this.props.passBack(total)
    }
    incrementAsync = () => {
        setTimeout(() => {
            const { value } = this.myRef.current
            // console.log(this.myRef.current.value);

            const { count, total } = this.state
            this.setState({ count: count + parseInt(value), total: total + 1 })
            console.log(value);
            this.props.passBack(total)
        }, 2000)

    }

    render() {

        return (
            <div>
                <h1>current sum {this.state.count}</h1>
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
