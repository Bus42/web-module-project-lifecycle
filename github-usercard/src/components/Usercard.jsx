import React, { Component } from 'react';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ImageListItem from '@material-ui/core/ImageListItem';
import axios from 'axios';

class Usercard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            followers: []
         }
    }

    componentDidMount(){
        console.log('%cUsercard: CDM', 'color: green')
        if(!this.props.user.follower){
            // this request should only fire when my data is initially mounted
            axios.get(this.props.user.followers_url)
        .then(res => this.setState({followers: res.data}))
        .catch(err => console.error(err))
        } else {
            console.log("%cfollower mounted", 'color: yellow')
        }
    }

    componentDidUpdate(){
        console.log('%cUsercard: CDU', 'color: orange')
        if(this.state.followers.length > 0){
            const newFollowers = this.state.followers.map((follower) => {
                const {avatar_url, login, name, html_url} = follower;
                const newFollower = {avatar_url, login, name, html_url, follower: true};
                return newFollower;
            })
            this.props.addFollowers(newFollowers)
        }
    }

    render() { 
        return ( <ImageListItem >
            <img src={this.props.user.avatar_url} alt={`${this.props.user.login} avatar`} />
            <ImageListItemBar
                title={this.props.user.login}
                subtitle={this.props.user.name}
            />
        </ImageListItem> );
    }
}
 
export default Usercard;