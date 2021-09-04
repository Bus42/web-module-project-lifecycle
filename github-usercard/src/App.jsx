import './App.css';
import React, { Component } from 'react';
import { BASE_URL } from './data/constants';
import Users from './components/Users';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] }
  }

  componentDidMount(){
    console.log('App: CDM')
    axios.get(`${BASE_URL}/bus42`)
    .then(res => {
      console.log(res.data)
      this.setState({users: [res.data]})
    })
    .catch(err => console.error(err))    
  }

  render() { 
    return ( <div id="app">
      {this.state.users.length === 0 ? <div>...loading</div> : <Users users={this.state.users} /> }
    </div> );
  }
}
 
export default App;