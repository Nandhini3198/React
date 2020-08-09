import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Pcard from '../productCard/card';
import { Container, Row, Col } from 'reactstrap';




class ProductList extends Component {

  constructor() {
    super()
    this.state = {
      products: [],
      products1:[],
      search: ""
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.getAllProducts = this.getAllProducts.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
   
    this.setState({
      search: event.target.value
    })
    this.getSearchedProducts(event)
  }
  getSearchedProducts(event) {
    
    if (this.state.search.length!==0) {
      axios.get("http://localhost:3000/allProducts?q=" + this.state.search)
        .then((response) => {
          console.log("search" + JSON.stringify(response.data))
          this.setState({ products: response.data,products1:response.data });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    else {
      this.setState({ products:this.state.products1 });
    }
  }
  componentWillMount = () => {
    console.log("will mount")
    this.getAllProducts();

  }
  getAllProducts() {
    axios.get("http://localhost:3000/allProducts")
      .then((response) => {
        //console.log(response)
        this.setState({ products: response.data ,products1:response.data});
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

    })
    this.getAllProducts();
  }

  render() {
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

export default ProductList;