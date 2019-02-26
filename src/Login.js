import React from "react";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pass: "",
      loginSuccess: false
    };
  }

  onClick = () => {
    this.child.method(); // do stuff
  };

  handleChange1 = event => {
    this.setState({ user: event.target.value });
  };

  handleChange2 = event => {
    this.setState({ pass: event.target.value });
  };

  funOnSubmit = () => {
    if (this.state.user == "ashish" && this.state.pass == "ashish123") {
      alert("Welcome back " + this.state.user);
      this.setState({ loginSuccess: true });
    } else {
      alert("Wrong username or password ");
    }
  };

  funOnClear = () => {
    this.setState({ user: "", pass: "" });
  };

  render() {
    if (this.state.loginSuccess) {
      return <Redirect to={`/home`} />;
    }

    return (
      <div>
        <h2> Login Page </h2>
        <label> Enter Username : </label>
        <input
          type="text"
          value={this.state.user}
          onChange={this.handleChange1}
        />
        <br />
        <br />
        <label> Enter Password : </label>
        <input
          type="password"
          value={this.state.pass}
          onChange={this.handleChange2}
        />
        <br />
        <br />
        <button onClick={this.funOnSubmit}> Submit </button>
        <button onClick={this.funOnClear}> Clear </button>
      </div>
    );
  }
}

export default Login;
