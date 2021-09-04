import './App.css';
import React, { Component } from 'react';
import { BASE_URL } from './data/constants';
import Users from './components/Users';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      myLogin: 'bus42',
      users: [] }
  }

  componentDidMount(){
    console.log('App: CDM')
    setTimeout(() => {
      axios.get(`${BASE_URL}/${this.state.myLogin}`)
    .then(res => {
      this.setState({users: [res.data]})
    })
    .catch(err => console.error(err))
    }, 1500)    
  }

  addFollowers = (followers) => {
    const newState = {users: [...this.state.users, ...followers]}
    console.log(newState)
  }

  render() { 
    return ( <div id="app">
      {this.state.users.length === 0 ? <div>...loading</div> : <Users users={this.state.users} addFollowers={this.addFollowers} /> }
    </div> );
  }
}
 
export default App;