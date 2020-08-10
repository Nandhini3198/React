import React, { Component } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { withRouter } from 'react-router';



class Login extends Component {
   constructor(props) {
      super(props)
      this.state = {
         email: "",
         password: "",
         emailError:"",
         passwordError:""
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.validateInput=this.validateInput.bind(this)

   }
   validateInput()
   {
      let emailError = "";
      let passwordError = "";

      if (!this.state.email) {
          emailError = "Email is required"
      }

      if (this.state.email !== undefined) {
          let lastAtPos = this.state.email.lastIndexOf('@');
          let lastDotPos = this.state.email.lastIndexOf('.');
          if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.email.indexOf('@@') == -1 && lastDotPos > 2 && (this.state.email.length - lastDotPos) > 2)) {
              emailError = "Email is Invalid"
          }
      }

      if (!this.state.password) {
          passwordError = "Password is required"
      }

      if (emailError || passwordError) {
          this.setState({ emailError, passwordError })
          return false;
      }

      return true;
   }

   handleChange(event) {
      this.setState({
         [event.target.name]: event.target.value
      })
   }


   async handleSubmit(event) {
      event.preventDefault();
     // console.log("e" + this.state.email)
     // const { history } = this.props;
     // console.log("history" + history)
     if(this.validateInput())
      {if (this.state.email  !== "" && this.state.password !=="") {
         const data = await axios.get("http://localhost:3000/users?email=" + this.state.email)
         if(data.data[0]){
         if (data.data[0].password == this.state.password) {
            console.log("true")
           localStorage.setItem('user', data.data[0].first_name)
            this.props.history.push('/Dash')
         }
         else {
            window.alert("Check your user name and password")
         }}
         else{
            window.alert("Check your user name and password")
         }
      }
      else{
         window.alert("enter credentials")
         this.props.history.push('/Login')
      }}
   }

      render() {
         return (
            <div>
               <div class="sidenav">
                  <div class="login-main-text">
                     <h2>Application<br></br>
            Login Page</h2>
                     <p>Login or register from here to access.</p>
                  </div>
               </div>
               <div class="main">
                  <div class="col-md-6 col-sm-12">
                     <div class="login-form">
                        <form>
                           <div style={{ paddingTop: 2 }} class="form-group">
                              <label>User Name</label>
                              <input type="text" onChange={this.handleChange} name="username" class="form-control" name="email" placeholder="User Name"></input>
                              <p style={{ fontSize: "12", color: 'red' }}>{this.state.emailError}</p>
                           </div>
                           <div class="form-group">
                              <label>Password</label>
                              <input type="password" name="password" onChange={this.handleChange} name="password" class="form-control" placeholder="Password"></input>
                              <p style={{ fontSize: "12", color: 'red' }}>{this.state.passwordError}</p>
                           </div>
                           <br />
                           <button type="submit" onClick={this.handleSubmit} class="btn btn-black">Login</button>
                           <Link to='/signUp'><button type="submit" style={{ marginLeft: 5 }} class="btn btn-black">Register</button></Link>
                        </form>
                     </div>
                  </div>
               </div>
            </div>

         );
      }
   }

   export default withRouter(Login);
