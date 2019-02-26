import React from "react";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "HELLO"
    };
  }

  render() {
    return <div>
    {this.state.message}</div>;
  }
}

export default Home;
