import React, { Component } from 'react';

class AddCounter extends Component {

    clickHandler = (e) => {
        e.preventDefault();
        this.props.add();
    }

    render() {
        return (
            <div>
                <form>
                    <button onClick={this.clickHandler}>Add</button>
                </form>
            </div>
        )
    }
}

export default AddCounter;
