import React, { Component } from 'react';
import './Signup.css';
import axios from 'axios'

class Signup extends Component {
    constructor()
        {
            super();
            this.state={
                firstname:"",
                lastname:"",
                contact:"",
                email:"",
                password:""

            }
            this.handleChange=this.handleChange.bind(this);
            this.handleSubmit=this.handleSubmit.bind(this);
        }


        handleChange(event)
        {
            console.log("yes")
            this.setState({
               [event.target.name] : event.target.value
            })
        }
        handleSubmit(event)
        {
            event.preventDefault();
            console.log("data")
            const user = {
                email: this.state.email,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                contact: this.state.contact,
                password: this.state.password
            }
            axios.post("http://localhost:3000/users", user).then((data) => {
                    console.log(data)
                  
        })
    }
    render() {
        

        return (
            <div>
               
     <div class="container" >
      <form >
           <div class="row">
           <label >First Name</label>
           <input type="text" onChange={this.handleChange} name="firstname"  placeholder="Enter your First Name"></input>
           </div>

           <div class="row">
           <label >Last Name</label>
           <input type="text" onChange={this.handleChange} name="lastname"  placeholder="Enter your Last Name"></input>
           </div>

           <div class="row">
           <label >Contact Number</label>
            <input type="text" onChange={this.handleChange} name="contact"  placeholder="Enter your contact number"></input>
            </div>

            <div class="row">
           <label >Email Id</label>
            <input type="text" onChange={this.handleChange} name="email" placeholder="Enter your contact number"></input>
            </div>

            <div class="row">
            <label >Password</label>
            <input type="text" onChange={this.handleChange} name="password" placeholder="Enter Password"></input>
            </div>

            <div class="row">
            <label >Confirm Password</label>
            <input type="text"   placeholder="Confirm your Password"></input>
            </div>



        
        <div class="row" style={{paddingtop: 1}} >
         <button type="submit" onClick={this.handleSubmit}>SignupLogin</button>
        
         <button type="submit"  style={{marginLeft:5},{marginTop :16},{margin:5}}> Back</button>
          <button type="submit" style={{marginLeft:5},{marginTop :16},{margin:5}}> Reset</button>  
          </div> 
          </form>
        </div>
      
            </div>
        );
    }
}

export default Signup;