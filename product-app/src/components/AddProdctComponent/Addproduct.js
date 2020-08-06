import React, { Component } from 'react';
import axios from 'axios'

class Addproduct extends Component {
   
      constructor()
        {
            super();
            this.state={
                pname:"",
                type:"",
                availability:"",
                price:"",
                discription:""

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
            const prod = {
                pname: this.state.pname,
                type: this.state.type,
                availability: this.state.availability,
                price: this.state.price,
                discription: this.state.discription
            }
            axios.post("http://localhost:3000/allProducts", prod).then((data) => {
                    console.log(data)
                  
        })
    }
    render() {
        return (
            <div>
                 <div class="header">
      
      <h2>
      The Full Cart</h2>
      
     </div>
     <div class="con">
      <h1 >Add Product</h1>
     <div class="container" >
      
      <form >
        <div class="row">
         <label >Product Name</label>
           <input type="text" onChange={this.handleChange} name="pname" placeholder="Enter product name"></input>
           </div>

           <div class="row">
              <label >Product Type</label>
              <select name="type" onChange={this.handleChange} name="cars" id="cars">
                  <option value="volvo">Inventory</option>
                  <option value="saab">Electronics</option>
                  <option value="mercedes">Automobile</option>
                
                </select>
                </div>

                <div class="row">
                  <label >Availability</label>
                    <input type="text" onChange={this.handleChange} name="availability"  placeholder="Enter Availability"></input>
                    </div>

                    <div class="row">
                      <label >Price</label>
                        <input type="text" onChange={this.handleChange} name="price"  placeholder="Enter Price"></input>
                        </div>

                        <div class="row">
                          <label >Product Description</label>
                            <input type="text" onChange={this.handleChange} name="discription" placeholder="Product Description"></input>
                            </div>



        
        <div class="row" style={{paddingTop: 1}} >
         <button style={{marginRight: 16},{marginTop:16}} onClick={this.handleSubmit} type="submit" value="">Add Product</button>
        
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

export default Addproduct;