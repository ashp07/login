import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path='/home' component={Home}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
