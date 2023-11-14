import { Component } from "react";

class App extends Component {
  state = { count: 0 };
  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <h1>{this.state.count}</h1>
        <button>Increase</button>
        <button>Decrease</button>
      </div>
    );
  }
}

export default App;
