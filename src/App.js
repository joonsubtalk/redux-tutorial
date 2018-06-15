import React, { Component } from 'react';
import Counter from './container/Counter';
import AddCounter from './container/AddCounter';
import RemoveCounter from './container/RemoveCounter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CounterActions from './actions';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className="App">
        It workz
        <Counter count={this.props.count} />
        <AddCounter add={this.props.actions.addCounter} />
        <RemoveCounter remove={this.props.actions.removeCounter} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    count: state.counterReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CounterActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
