import React, { Component } from 'react';
import './Signup.css'

class Signup extends Component {
    render() {
        return (
            <div>
                {/* <div class="header">
      
      <h2><img src="logo.png" width="50" height="50"></img>
          The Full Cart</h2>
      
     </div> */}
     <div class="container" >
      <form >
           <div class="row">
           <label >First Name</label>
           <input type="text"  placeholder="Enter your First Name"></input>
           </div>

           <div class="row">
           <label >Last Name</label>
           <input type="text"  placeholder="Enter your Last Name"></input>
           </div>

           <div class="row">
           <label >Contact Number</label>
            <input type="text"  placeholder="Enter your contact number"></input>
            </div>

            <div class="row">
            <label >Password</label>
            <input type="text"  placeholder="Enter Password"></input>
            </div>

            <div class="row">
            <label >Confirm Password</label>
            <input type="text"  placeholder="Confirm your Password"></input>
            </div>



        
        <div class="row" style={{paddingtop: 1}} >
         <button type="submit" style={{marginLeft:5},{marginTop :16},{margin:5}} >SignupLogin</button>
        
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