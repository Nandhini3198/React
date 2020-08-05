import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
    render() {
        return (
 <div> 

<div class="topnav" style={{position: "relative"}} >
      <Link to="/Dash">Dashboard</Link>
       <Link to="/Das">ProductList</Link>
 </div>
<div class="left">
<img src="chart.jpg"  class="responsive" style={{width:60},{height:20}}></img>
</div>

<div class="right">
  <div class="card">
      <img src="prod1.jpg" alt="Avatar" style={{width:100}}></img>
      <div >
        <h4><b>Daniel Willinton</b></h4> 
        <p>Rs 15,000</p> 
      </div>
    </div>
</div>
            
</div>         
        );
    }
}

export default Dashboard;