import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Pcard from '../productCard/card';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import initialDataFetch from "../../actions/listProduct";
import deleteProductfromList from "../../actions/deleteProduct"




class ProductList extends Component {

  constructor() {
    super()
    this.state = {
      products: [],
      products1: [],
      search: ""
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.getAllProducts = this.getAllProducts.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.getSearchedProducts = this.getSearchedProducts.bind(this)
  }

  handleChange(event) {
    if (event.target.value === "") {
      this.setState({
        products: this.props.products
      })
    }
    else {
      this.setState({
        search: event.target.value
      })
      this.getSearchedProducts()
    }
  }

  getSearchedProducts(event) {

    let filterarr = this.state.products
    filterarr = filterarr.filter((product) => {
      if (product.pname.toLowerCase().includes((this.state.search).toLowerCase())) {
        return product
      }
      console.log(filterarr)
     

    })

    //console.log("search" + JSON.stringify(response.data))
    this.setState({ products: filterarr });


  }
  componentWillMount = () => {
    console.log("will mount")
    
    this.getAllProducts();

  }
  getAllProducts() {
    axios.get("http://localhost:3000/allProducts")
      .then((response) => {
        this.props.setProductList(response.data)
        this.setState({
          products:this.props.products
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  handleDelete(event) {
    //event.preventDefault();
    console.log("data")

    axios.delete("http://localhost:3000/allProducts" + this.state.id).then((data) => {
      console.log(data)
      this.props.deleteProduct(this.state.id)
    })
    this.getAllProducts();
  }

  render() {
    console.log("products" , this.props.products)
    const products = this.state.products.map((prod) => {
      //console.log("prod"+prod)
      return (
        <div>

          <Col className="col-sm-20">
            <Pcard prod={prod} getAllProducts={this.getAllProducts}></Pcard>
          </Col>

        </div>
      )
    })
    return (
      <div>
        <br />
        <div >
          <div class="md-form active-purple active-purple-2 mb-3">
            <input class="form-control" type="text" onChange={this.handleChange} placeholder="Search" aria-label="Search"></input>
          </div>




          <Link to="/addProduct">   <button type="button" style={{ float: "right" }} class="btn btn-success">Add Product</button></Link>
        </div>
        <br />
        <br />

        <div>
          <Container fluid>
            <Row>{products}
            </Row>
          </Container></div>
      </div>

    )
  }






}
function mapStoreToProps(store) {
  return {
    products: store.productList
  }
}
function mapPropsToStore(dispatch) {
  return bindActionCreators({
    setProductList: initialDataFetch,
    deleteProduct: deleteProductfromList

  }, dispatch)
}

export default connect(mapStoreToProps, mapPropsToStore)(ProductList);