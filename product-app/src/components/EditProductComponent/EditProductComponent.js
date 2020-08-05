import React, { Component } from 'react';

class EditProductComponent extends Component {
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
           <input type="text"  placeholder="Enter product name"></input>
           </div>

           <div class="row">
              <label >Product Type</label>
              <select name="cars" id="cars">
                  <option value="volvo">Inventory</option>
                  <option value="saab">Electronics</option>
                  <option value="mercedes">Automobile</option>
                
                </select>
                </div>

                <div class="row">
                  <label >Availability</label>
                    <input type="text"  placeholder="Enter Availability"></input>
                    </div>

                    <div class="row">
                      <label >Price</label>
                        <input type="text"  placeholder="Enter Price"></input>
                        </div>

                        <div class="row">
                          <label >Product Description</label>
                            <input type="text"  placeholder="Product Description"></input>
                            </div>



        
        <div class="row" style={{paddingTop: 1}} >
         <button style={{marginRight: 16},{marginTop:16}} type="submit" value="">Edit Product</button>
        
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

export default EditProductComponent;