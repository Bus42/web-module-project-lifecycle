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
      users: [],
      followers: [] }
  }

  componentDidMount(){
    let userArray = [];
    console.log('App: CDM')
    setTimeout(() => {
      axios.get(`${BASE_URL}/${this.state.myLogin}`)
    .then(res => {
      userArray.push(res.data)
      return res.data.followers_url
    })
    .then(res => 
      axios.get(res)
      .then(
        res => {
          res.data.forEach(user => userArray.push(user))
        }
      )
      .catch(err=> console.error(err))
    )
    .catch(err => console.error(err))
    .finally(() => {
      this.setState({users: userArray})
    })
    }, 1500)    
  }


  render() { 
    return ( <div id="app">
      {this.state.users.length === 0 ? <div>...loading</div> : <Users users={this.state.users} /> }
    </div> );
  }
}
 
export default App;