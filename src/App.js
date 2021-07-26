import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    const { count, increaseCount, decreaseCount } = this.props;
    console.log(count);
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
      dispatch({ type: 'INCREMENT' });
    },
    decreaseCount: () => {
      dispatch({ type: 'DECREMENT' });
    }
  };
}

function mapStateToProps(state) {
  return {
    count: state.count.count
  };
}
export default connect(
  mapStateToProps,
  mapDispathToProps
)(App);
