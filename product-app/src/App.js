import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginComponent from './components/LoginComponent/Login';
import SignUpComponent from './components/SignupComponent/Signup';
import AddProduct from './components/AddProdctComponent/Addproduct';
import EditProduct from './components/EditProductComponent/EditProductComponent';
import Dahboard from './components/DashboardComponent/Dashboard'
import Dashboard from './components/DashboardComponent/Dashboard';
import Nav from './components/NavigationComponent/Nav'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ProductList from './components/ProductListComponent/ProductList';
import Emp from './components/EmployeeComponent/Employee'

function App() {
  return (
    <Router>
    <div className="App">
     
    {/* <LoginComponent></LoginComponent>
    <SignUpComponent></SignUpComponent> */}
    {/* <AddProduct></AddProduct> */}
    {/* <EditProduct></EditProduct>
      <Dashboard></Dashboard> */}
<Nav></Nav>

<Switch>
<Route path="/Login" exact component={LoginComponent}/>
<Route path="/SignUp" exact component={SignUpComponent}/>
<Route path="/rest" exact component={Emp}/>
<Route path="/Dash" exact component={Dashboard}/>
<Route path="/Das" exact component={ProductList}/>
<Route path="/addProduct" exact component={AddProduct}/>
</Switch>
    </div>
    </Router>
  );
}

export default App;
