import React, { Component } from 'react';

class Usercard extends Component {
    constructor(props) {
        super(props);
        this.state = { user: {} }
    }
    componentDidMount(){
        console.log('Usercard: CDM')
        console.log(this.props)
    }
    render() { 
        return ( <li>
            <h2><a href={this.props.user.html_url} target={this.props.user.login} >{this.props.user.login}</a></h2>
        </li> );
    }
}
 
export default Usercard;