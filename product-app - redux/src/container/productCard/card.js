import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom'
import axios from 'axios';

class card extends Component {

    constructor(props)
    {
        super(props)
       // console.log(this.props.prod)
       console.log("inside pcard",this.props.prod)
        this.state={
            id:this.props.prod.id
        }
        this.handleDelete=this.handleDelete.bind(this)
    }

    handleDelete(event)
    {
        console.log(this.state.name)
       
        const data=axios.delete(`http://localhost:3000/allProducts/${this.state.id}`).then((data)=>
        {
            console.log(data)
        })
        this.props.getAllProducts()
        
    }
    render() {
        return (
            <div >
                <br/>
                <div>
                <div className="card col" style={{width:"20rem",height:"35rem"}}>
          <img className="card-img-top" src={this.props.prod.image} style={{width:"20rem"},{height:"15rem"}} alt="Card image cap"></img>
          <div className="card-body">
            <h5 className="card-title">{this.props.prod.pname}</h5>
            <h6 className="card-title">{this.props.prod.availability}</h6> 
            <h6 className="card-title">Rs {this.props.prod.price}</h6>
            <p className="card-text">{this.props.prod.discription}</p>
           
           <Link to={{
  pathname: '/editProduct',
  state: {
    prod: this.props.prod
  }
}}><a href="#" className="btn btn-primary" style={{marginLeft:5},{marginTop :16},{margin:5}}>Edit</a></Link>
            <button type="button" onClick={this.handleDelete} className="btn btn-primary" style={{marginLeft:5},{marginTop :16},{margin:5}}>Delete</button>
          </div>
        </div> 
        </div>
            </div>
        );
    }
}

export default card;