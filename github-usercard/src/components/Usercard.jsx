import React, { Component } from 'react';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ImageListItem from '@material-ui/core/ImageListItem';

class Usercard extends Component {

    componentDidMount(){
        console.log('%cUsercard: CDM', 'color: green')
    }

    componentDidUpdate(){
        console.log('%cUsercard: CDU', 'color: orange')
    }

    render() { 
        return ( 
        <ImageListItem >
            <img src={this.props.user.avatar_url} alt={`${this.props.user.login} avatar`} />
            <ImageListItemBar
                title={this.props.user.login}
                subtitle={this.props.user.name}
            />
        </ImageListItem> );
    }
}
 
export default Usercard;