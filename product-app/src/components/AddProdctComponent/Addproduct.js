import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';

class Addproduct extends Component {

  constructor() {
    super();
    this.state = {
      pname: "",
      type: "",
      availability: "",
      price: "",
      discription: "",
      image: "",
      nameError: "",
      typeError: "",
      availabilityError: "",
      priceError: "",
      discriptionError: "",
      imageError: ""

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.validateInput = this.validateInput.bind(this);
    this.back=this.back.bind(this)
  }
  back()
  {
    this.props.history.push('/List')
  }
  validateInput() {
    let nameError = "";
    let typeError = "";
    let availabilityError = "";
    let priceError = "";
    let discriptionError = "";
    let imageError = "";

    if (!this.state.pname) {
      nameError = "Product name is required"
    }
    if (!this.state.type) {
      typeError = "Product type is required"
    }
    if (!this.state.availability) {
      availabilityError = "Enter products availability"
    }
    if (!this.state.price) {
      priceError = "Price is required"
    }
    if (!this.state.discription) {
      discriptionError = "Discription  is required"
    }
    


    if (nameError || typeError || availabilityError || priceError || discriptionError ) {
      this.setState({ nameError, typeError, availabilityError, priceError, discriptionError, imageError })
      return false;
    }

    return true;
  }


handleImage(event) {
  console.log("image")
  const reader = new FileReader();
  reader.onload = () => {
    if (reader.readyState == 2) {
      this.setState({
        image: reader.result
      })
    }
  }
  console.log("url" + this.state.image)
  reader.readAsDataURL(event.target.files[0])
}

handleChange(event) {
  console.log("yes")
  this.setState({
    [event.target.name]: event.target.value
  })
}
handleSubmit(event) {
  event.preventDefault();
  if(this.validateInput()){
  const { history } = this.props;
 
  console.log("data")
  console.log(this.state.type)
  const prod = {
    pname: this.state.pname,
    type: this.state.type,
    availability: this.state.availability,
    price: this.state.price,
    discription: this.state.discription,
    image: this.state.image
  }
  console.log(prod)
  axios.post("http://localhost:3000/allProducts", prod).then((data) => {
    console.log(data)
    this.props.history.push('/List')


  })
}
}
render() {
  return (
    <div>
     
      <div class="con">
        <h1 >Add Product</h1>
        <div class="container" >

          <form >
            <div class="row">
              <label >Product Name</label>
              <input type="text" onChange={this.handleChange} name="pname" placeholder="Enter product name"></input>
              <p style={{ fontSize: "12", color: 'red' }}>{this.state.nameError}</p>
            </div>

            <div class="row">
              <label >Product Type</label>
              <select name="type" onChange={this.handleChange}   >
                <option value="Default" >Choose a category</option>
                <option value="Health" >Health Care</option>
                <option value="Electronics" >Electronics</option>
                <option value="Automobile">Automobile</option>
                <option value="Grooming">Grooming</option>

              </select>
              <p style={{ fontSize: "12", color: 'red' }}>{this.state.typeError}</p>
            </div>

            <div class="row">
              <label >Availability</label>
              <input type="text" onChange={this.handleChange} name="availability" placeholder="Enter Availability"></input>
              <p style={{ fontSize: "12", color: 'red' }}>{this.state.availabilityError}</p>
            </div>

            <div class="row">
              <label >Price</label>
              <input type="text" onChange={this.handleChange} name="price" placeholder="Enter Price"></input>
              <p style={{ fontSize: "12", color: 'red' }}>{this.state.priceError}</p>
            </div>
            <div class="row">
              <label >Product image</label>
              <input type="file" accept="image/" alt="" onChange={this.handleImage} name="image" placeholder=""></input>
              <p style={{ fontSize: "12", color: 'red' }}>{this.state.imageError}</p>
            </div>

            <div class="row">
              <label >Product Description</label>
              <input type="text" onChange={this.handleChange} name="discription" placeholder="Product Description"></input>
              <p style={{ fontSize: "12", color: 'red' }}>{this.state.discriptionError}</p>
            </div>




            <div class="row" style={{ paddingTop: 1 }} >
              <button style={{ marginRight: 16 }, { marginTop: 16 }} onClick={this.handleSubmit} type="submit" value="">Add Product</button>

              <button style={{ marginRight: 16 }, { marginTop: 16 }} onClick={this.back} type="submit" value=""> Back</button>
              {/* <button style={{ marginRight: 16 }, { marginTop: 16 }} type="submit" value="">Reset  </button> */}
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}
}

export default withRouter(Addproduct);