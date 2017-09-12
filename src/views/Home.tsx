import * as React from 'react';
// import { Link } from 'react-router-dom';

import Hello from '../components/Hello';

import './home.css';

// const logo = require('../logo.svg');

class Home extends React.Component {

  public render() {

    return (
      <div className="App">
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div> */}
        {/* <div>
          <Link to={'/about'} >About</Link>&nbsp;<Link to={'/admin'} >Admin</Link>
        </div> */}

        <Hello />
      </div>
    );
  }
}

export default Home;
