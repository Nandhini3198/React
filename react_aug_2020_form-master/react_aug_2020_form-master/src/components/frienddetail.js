import React from 'react';


class FriendDetail extends React.Component {
   
    constructor(props){
        super(props)
        this.state ={
            since:parseInt(this.props.since)
        }
       
    }

    deleteCurrentFriend=()=>{
        console.log("delete friend with id: " + this.props.id);
        this.props.deleteId(this.props.id)
    }

    editFriendWithId=()=>{
        console.log("edit friend with id: " + this.props.id);
        this.props.editId(this.props.id)
    }

    increaseSince=()=>{
        console.log("edit friend with id: " + this.state.id);
        this.setState({   since: this.state.since+1})
     
    }

    decreaseSince=()=>{
        console.log("edit friend with id: " + this.props.id);
        this.setState({   since:this.state.since-1})
    }
  
    render() { 
        return ( 
            <tr>
                <td>{this.props.id} </td>
                <td>{this.props.name} </td>
                <td>{this.state.since}</td>
                <td>
                    <button  onClick={this.increaseSince} >Since + </button>
                </td>
                <td>
                    <button onClick={this.decreaseSince} >Since - </button>
                </td>
                <td>
                    <button onClick={this.editFriendWithId}>Edit</button>
                </td>
                <td>
                    <button onClick={this.deleteCurrentFriend}>Del</button>
                </td>
                
            </tr>    
        )
    }
       
}
 
export default FriendDetail;