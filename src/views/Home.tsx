import * as React from 'react';
import { Link } from 'react-router-dom';

import Hello from '../components/Hello/HelloContainer';
import './home.css';

const logo = require('../logo.svg');

class Home extends React.Component {
  public render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <Link to={'/about'} >About</Link>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Hello />
      </div>
    );
  }
}

export default Home;
