import React, { Component } from 'react'
import store from '../../Redux/store'

export default class Action extends Component {

    componentDidMount() {
        store.subscribe(() => {
            this.setState({})
        })
    }

    render() {

        return (
            <div>
                <h4>Total Clicked times:{store.getState().total}</h4>
            </div>
        )
    }
}
