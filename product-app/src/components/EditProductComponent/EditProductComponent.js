import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'

class EditProductComponent extends Component {
  constructor(props)
  {
    super(props)
    
  
   console.log(this.props.location.state.prod.pname)
   this.state={
     id:this.props.location.state.prod.id,
     pname:this.props.location.state.prod.pname,
     type:this.props.location.state.prod.type,
     availability:this.props.location.state.prod.availability,
     price:this.props.location.state.prod.price,
     discription:this.props.location.state.prod.discription
   }
   this.handleEdit=this.handleEdit.bind(this)
   this.handleChange=this.handleChange.bind(this)
  }
  handleChange(e)
  {
    //e.preventDefault()
    this.setState({
      [e.target.name]:e.target.value
    })
    
  }
  handleEdit(event)
  {
    event.preventDefault();
    console.log("availa"+this.state.availability)
    console.log("availa"+this.state.type)
    console.log("availa"+this.state.pname)
    console.log("availa"+this.state.id)
    console.log("availa"+this.state.price)
    const prod={
      pname:this.state.pname,
      type:this.state.type,
      availability:this.state.availability,
      price:this.state.price,
      discription:this.state.discription
    }
    console.log("prod"+prod)
    axios.put(`http://localhost:3000/allProducts/${this.state.id}`,prod).then((data) => {
            console.log("edited"+JSON.stringify(data.data))
             //this.props.history.push('/List')
          
})
  }
    render() {
        return (
            <div>
                
     <div class="con">
      <h1 >Edit Product</h1>
     <div class="container" >
      
      <form >
        <div class="row">
         <label >Product Name</label>
           <input type="text" onChange={this.handleChange} name="pname" defaultValue={this.props.location.state.prod.pname}  ></input>
           </div>

           <div class="row">
              <label >Product Type</label>
              <select name="cars"  onChange={this.handleChange} name="type" defaultValue={this.state.type} id="cars">
                  <option value="Inventory">Inventory</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Automobile">Automobile</option>
                
                </select>
                </div>

                <div class="row">
                  <label >Availability</label>
                    <input type="text"  onChange={this.handleChange} name="availability"  defaultValue={this.state.availability}></input>
                    </div>

                    <div class="row">
                      <label >Price</label>
                        <input type="text"  onChange={this.handleChange} name="price" defaultValue={this.state.price}></input>
                        </div>

                        <div class="row">
                          <label >Product Description</label>
                            <input type="text"  onChange={this.handleChange} name="discription"  defaultValue={this.state.discription}></input>
                            </div>



        
        <div class="row" style={{paddingTop: 1}} >
         <button style={{marginRight: 16},{marginTop:16}} type="submit" onClick={this.handleEdit} value="">Edit Product</button>
        
         <button style={{marginRight: 16},{marginTop:16}} type="submit" value=""> Back</button>
          <button style={{marginRight: 16},{marginTop:16}} type="submit" value="">Reset  </button>     
</div> 
</form>

</div>
        </div>
            </div>
        );
    }
}

export default withRouter(EditProductComponent);