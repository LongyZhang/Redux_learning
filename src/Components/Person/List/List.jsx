import React, { Component } from 'react'

export default class List extends Component {

    render() {
        const { nameList } = this.props
        console.log(nameList, "ca");
        return (
            <ul>
                {nameList.todos.map((todo) => {
                    return <li key={todo.id}>{todo.name} {todo.age}</li>
                })}
            </ul>
        )
    }
}
