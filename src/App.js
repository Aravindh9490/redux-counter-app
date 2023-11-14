import { Component } from "react";
import { connect } from "react-redux";
import { decrement, increment } from "./redux/action";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Counter App</h1>
        <h1>{this.props.count}</h1>
        <button onClick={this.props.increment}>Increase</button>
        <button onClick={this.props.decrement}>Decrease</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
