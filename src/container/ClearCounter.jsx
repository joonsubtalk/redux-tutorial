import React, { Component } from 'react'

export default class ClearCounter extends Component {

    clickHandler = (e) => {
        e.preventDefault();
        this.props.clearCounter();
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Clear Counter</button>
            </div>
        )
    }
}
