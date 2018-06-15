import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div>
                {this.props.count}
            </div>
        )
    }
}

export default Counter;
