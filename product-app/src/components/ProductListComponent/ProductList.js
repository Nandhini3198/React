import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProductList extends Component {
    render() {
        return (
            <div>
               
<br></br>

<div class="topnav" style={{position: "relative"}} >
      <Link to="/Dash">Dashboard</Link>
       <Link to="/Das">ProductList</Link>
 </div>
<div class="row" style={{width:6}}>
<label>Search</label>
<br></br>
<input class="captch"></input>
<input style={{marginRight: 16}}type="submit" value="Search"></input>
</div>
<br></br>
<div style={{position:"relative"}} >
<input style={{position: "absolute"},
{right: 60},
{top: 2}} type="submit" value="Add Product"/>
</div>
<div class="row"style={{width:150}}>
<label>Sort by</label>
<select name="cars" id="cars">
  <option value="saab">Electronics</option>
  <option value="mercedes">Assecesories</option>

</select>
</div>
<div style={{marginTop: 5}}>
<div >
 
  <div class="card" >
    <img src="prod1.jpg" ></img>
    
    <div>
      <h4><b>Daniel Willington</b></h4>
      <p>Watch cost 15,000</p>
      <input style={{marginRight: 16}} type="submit" value="Edit"></input>
      <input style={{marginRight: 16}} type="submit" value="Delete"></input>
    </div>
  
  </div>
 
</div>

<div class="card" >
    <img src="prod1.jpg" ></img>
    
    <div>
      <h4><b>Daniel Willington</b></h4>
      <p>Watch cost 15,000</p>
      <input style={{marginRight: 16}} type="submit" value="Edit"></input>
      <input style={{marginRight: 16}} type="submit" value="Delete"></input>
    </div>
  
  </div>
 
</div>
  

</div>


            
        );
    }
}

export default ProductList;