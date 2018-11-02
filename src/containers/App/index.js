import React, { Component } from 'react';
import logo from 'images/react-logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Work in progress.</p>
          <a
            className="App-link"
            href="https://github.com/floatsoft/floatsoft.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit{' '}
            <i>
              <code>Floatsoft</code>
            </i>{' '}
            on GitHub
          </a>
        </header>
      </div>
    );
  }
}

export default App;
