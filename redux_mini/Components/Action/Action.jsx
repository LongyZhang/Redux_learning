import React, { Component } from 'react'

export default class Action extends Component {
    render() {
        const { totalTimes } = this.props
        console.log(this.props);
        return (
            <div>
                <h4>Total Clicked times:{totalTimes}</h4>
            </div>
        )
    }
}
