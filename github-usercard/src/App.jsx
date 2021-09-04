import './App.css';
import React, { Component } from 'react';
import { MY_DATA } from './data/constants';
import Usercard from './components/Usercard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [MY_DATA] }
  }
  render() { 
    return ( <div id="app">
      <ul>
        {this.state.users.map((user, index) => {
          return <Usercard user={user} key={index} />
        })}
      </ul>
    </div> );
  }
}
 
export default App;