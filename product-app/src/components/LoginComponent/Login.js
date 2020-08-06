import React, { Component } from 'react';
import './Login.css';
import {Link} from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div>
                {/* <div class="header">
                <h2><img  src="logo.png"  />The Full Cart</h2></div> */}
            <div class="container">
                     <form>
        
           <div class="row">
           <label >User Id/Email Id</label>
           <input type="text"  placeholder="Enter your user Id"></input>
           </div>

           <div class="row">
              <label >Password</label>
                <input type="text"  placeholder="Enter yourpassword"></input>
            </div>
               
    
        
        <div class="row"  >
        <button type="submit" style={{marginLeft:5},{marginTop :16},{margin:5}} >Login</button>
        
         <button type="submit"  style={{marginLeft:5},{marginTop :16},{margin:5}}> SignUp
         </button>
         <span class="psw">Forgot <a href="#">Password?</a></span> 
             
        </div> 
        
      </form>


          
           </div>
           </div>
           
        );
    }
}

export default Login;
