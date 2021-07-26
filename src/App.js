import React from 'react';
import { connect } from 'react-redux';
import Api from './api/api';
import Store from './store';

const api = new Api(Store);

class App extends React.Component {
  render() {
    const { count, increaseCount, decreaseCount } = this.props;
    return (
      <div className="App">
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            increaseCount();
          }}
        >
          Increse
        </button>
        <button
          onClick={() => {
            decreaseCount();
          }}
        >
          Decrese
        </button>
      </div>
    );
  }
}

function mapDispathToProps(dispatch) {
  return {
    increaseCount: () => {
      return api.increaseCount();
    },
    decreaseCount: () => {
      return api.decreaseCount();
    }
  };
}

function mapStateToProps(state) {
  return {
    count: api.getCount()
  };
}
export default connect(
  mapStateToProps,
  mapDispathToProps
)(App);
