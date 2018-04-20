import React from "react";
import logo from '../logo.svg';

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Instruu</h1>
        </header>
        <p className="App-intro">Let's get learning!</p>
      </div>
    );
  }
}

export default Home
