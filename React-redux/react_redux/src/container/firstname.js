import React, { Component } from 'react';

class firstname extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

function convertStoreToProps(store){
    console.log('Received complete store....in FriendList container');
    console.log(store);
    //Identify the data from store which FriendList container can consume.
    //FriendList will consume extracted data as props!!!!
    return {
        friends: store.allfriends
    }
}

function convertEventToPropsAndDispatch(dispatch){
    //console.log("Received the nameclicked event as props in FriendList.... ")
    return bindActionCreators({
        clickFriendName: friendNameClicked
    }, dispatch)

}
export default connect(convertStoreToProps, convertEventToPropsAndDispatch)(firstname);