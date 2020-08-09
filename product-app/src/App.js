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
import Emp from './components/EmployeeComponent/Employee';
import { useHistory } from "react-router-dom";
import Employee from './components/EmployeeComponent/Employee';
import Home from './components/HomeComponent/Home'


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



<Route path="/" component={Home}/>
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
