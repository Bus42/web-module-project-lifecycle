import React, { Component } from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import Usercard from './Usercard'


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
                <Usercard user={user} key={index} addFollowers={this.props.addFollowers} />
            )}
            </ImageList>
        </div> );
    }
}
 
export default Users;