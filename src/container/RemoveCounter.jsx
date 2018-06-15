import React, { Component } from 'react'

class RemoveCounter extends Component {

    clickHandler = (e) => {
        e.preventDefault();
        this.props.remove();
    }

    render() {
        return (
            <div>
                <form>
                    <button onClick={this.clickHandler}>Remove</button>
                </form>
            </div>
        )
    }
}

export default RemoveCounter;
