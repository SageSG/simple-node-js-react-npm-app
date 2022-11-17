import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import passwordData from './10-million-password-list-top-1000.txt';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { password: "", passwordList : []};
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // make fetch request
    this.state.passwordList = fetch(passwordData)
      .then(r => r.text())
      .then(text => {
        return text.split('\r\n');
      });

}

  handleChange(event) {
    this.setState({ password: event.target.value }, () => {
      console.log('updating')
      });
  }

  handleClick(e) {
    e.preventDefault()

    console.log('Click happened');
    const password = this.state.password;


    console.log(this.state.passwordList)
    

    // if (this.state.passwordList.includes(this.state.password)) {
    //   alert("Password is too common");
    //   return;
    // }
    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }
    if (password.length > 30) {
      alert("Password cannot be this long")
      return;
    }



  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">

          <div>Password</div><input type="text" onChange={this.handleChange.bind(this)}></input>
          <button onClick={this.handleClick.bind(this)}>Submit</button>
        </p>
      </div>
    );
  }
}

export default App;
