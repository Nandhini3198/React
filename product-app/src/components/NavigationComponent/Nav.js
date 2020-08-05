import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <div>
                <div class="topnav" style={{textAlign:"center"}}>
  <Link to="/Login">Login</Link>
  <Link to="/SignUp">Sign Up</Link>
  <Link to="/rest">Employee</Link>
  <h3 style={{color:"white"},{alignSelf:"left"}}>The Full CarT</h3>
 
  
</div>
            {/* <ul>
                <Link to="/Dash">
                <li>Dashboard</li></Link>
                <Link to="/Das">  <li>List</li>
                </Link></ul>    */}
            </div>
        );
    }
}

export default Nav;