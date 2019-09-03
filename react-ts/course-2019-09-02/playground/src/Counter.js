import React, { useState } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const reset = () => {
//     setCount(0);
//   };

//   return (
//     <div>
//       <button onClick={increment}>{count}</button>
//       <button onClick={reset} >Reset</button>
//     </div>
//   );
// };

class Counter extends React.Component {

  constructor() {
    super();
    this.state = {count: 0};
  }

  increment = () => {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return <button onClick={this.increment} > {this.state.count}</button>
  }
}

export default Counter;
