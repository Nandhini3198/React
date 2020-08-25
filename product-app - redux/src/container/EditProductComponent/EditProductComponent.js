import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import editProduct from '../../actions/editProduct'

class EditProductComponent extends Component {
  constructor(props) {
    super(props)


    //  console.log(this.props.location.state.prod.pname)
    this.state = {
      id: this.props.location.state.prod.id,
      pname: this.props.location.state.prod.pname,
      type: this.props.location.state.prod.type,
      availability: this.props.location.state.prod.availability,
      price: this.props.location.state.prod.price,
      discription: this.props.location.state.prod.discription,
      image: this.props.location.state.prod.image
    }
    this.handleEdit = this.handleEdit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.back = this.back.bind(this)
    this.validateInput = this.validateInput.bind(this)
  }
  handleChange(e) {
    //e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })

  }
  back() {
    this.props.history.push('/List')
  }
  validateInput() {
    let nameError = "";
    let typeError = "";
    let availabilityError = "";
    let priceError = "";
    let discriptionError = "";
    let imageError = "";
    var pattern = new RegExp(/^[0-9\b]+$/);

    if (!this.state.pname) {
      nameError = "Product name is required"
    }
    if (!this.state.type) {
      typeError = "Product type is required"
    }
    if (!pattern.test(this.state.availability)) {
      availabilityError = "Enter numerical value for availability"
    }
    if (!pattern.test(this.state.price)) {
      priceError = "Enter numerical value"
    }
    if (!this.state.discription) {
      discriptionError = "Discription  is required"
    }



    if (nameError || typeError || availabilityError || priceError || discriptionError) {
      this.setState({ nameError, typeError, availabilityError, priceError, discriptionError, imageError })
      return false;
    }

    return true;
  }
  handleEdit(event) {
    event.preventDefault();
    if (this.validateInput()) {
      const prod = {
        pname: this.state.pname,
        type: this.state.type,
        availability: this.state.availability,
        price: this.state.price,
        image: this.state.image,
        discription: this.state.discription,
        availabilityError: "",
        priceError: ""
      }
      console.log("prod" + prod)
      axios.put(`http://localhost:3000/allProducts/${this.state.id}`, prod).then((data) => {
        console.log("edited" + JSON.stringify(data.data))
        this.props.history.push('/List')
        this.props.editProductwithData(prod)

      })
    }
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
                <select name="cars" onChange={this.handleChange} name="type" defaultValue={this.state.type} id="cars">
                  <option value="Inventory">Inventory</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Automobile">Automobile</option>

                </select>
              </div>

              <div class="row">
                <label >Availability</label>
                <input type="text" onChange={this.handleChange} name="availability" defaultValue={this.state.availability}></input>
                <p style={{ fontSize: "12", color: 'red' }}>{this.state.availabilityError}</p>
              </div>

              <div class="row">
                <label >Price</label>
                <input type="text" onChange={this.handleChange} name="price" defaultValue={this.state.price}></input>
                <p style={{ fontSize: "12", color: 'red' }}>{this.state.priceError}</p>
              </div>

              <div class="row">
                <label >Product Description</label>
                <input type="text" onChange={this.handleChange} name="discription" defaultValue={this.state.discription}></input>
              </div>




              <div class="row" style={{ paddingTop: 1 }} >
                <button style={{ marginRight: 16 }, { marginTop: 16 }} type="submit" onClick={this.handleEdit} value="">Edit Product</button>

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

function mapPropsToStore(dispatch) {
  return bindActionCreators({
    editProductwithData: editProduct
  }, dispatch)
}


export default connect(null, mapPropsToStore)(withRouter(EditProductComponent));