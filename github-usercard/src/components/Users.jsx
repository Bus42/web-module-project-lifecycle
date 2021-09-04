import React, { Component } from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';


class Users extends Component {
    constructor() {
        super();
        this.state={}
    }

    render() { 
        return ( <div id="users_component">
            <ImageList>
                <ImageListItem >
                    <ListSubheader component='div' style={{display: 'block'}} >Github Users</ListSubheader>
                </ImageListItem>
            {this.props.users.map((user, index) => 
                <ImageListItem key={index}>
                    <img src={user.avatar_url} alt={`${user.login} avatar`} />
                    <ImageListItemBar
                        title={user.login}
                        subtitle={user.name}
                    />
                </ImageListItem>
            )}
            </ImageList>
        </div> );
    }
}
 
export default Users;