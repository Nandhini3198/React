import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginComponent from './container/LoginComponent/Login';
import SignUpComponent from './container/SignupComponent/Signup';
import AddProduct from './container/AddProdctComponent/Addproduct';
import EditProduct from './container/EditProductComponent/EditProductComponent';
import Dahboard from './container/DashboardComponent/Dashboard'
import Dashboard from './container/DashboardComponent/Dashboard';
import Nav from './container/NavigationComponent/Nav'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ProductList from './container/ProductListComponent/ProductList';
import Emp from './container/EmployeeComponent/Employee';
import { useHistory } from "react-router-dom";
import Employee from './container/EmployeeComponent/Employee';
import Home from './container/HomeComponent/Home'


function App() {
  const history = useHistory();
  return (
    <Router history={history}>
    <div className="App">
     
    {/* <LoginComponent></LoginComponent>
    <SignUpComponent></SignUpComponent> */}
    {/* <AddProduct></AddProduct> */}
    {/* <EditProduct></EditProduct>
      <Dashboard></Dashboard> */}


<Route path="/"  component={Home}/>
<Route path="/Login" exact component={LoginComponent}/>
<Route path="/SignUp" exact component={SignUpComponent}/>

<Route path="/Dash" exact component={Dashboard}/>
<Route path="/List" exact component={ProductList}/>
<Route path="/addProduct" exact component={AddProduct}/>
<Route path="/editProduct" exact component={EditProduct}/>

    </div>
    </Router>
  );
}

export default App;
