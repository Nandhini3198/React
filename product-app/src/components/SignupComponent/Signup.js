import React, { Component } from 'react';
import './Signup.css';
import axios from 'axios'

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            firstname: "",
            lastname: "",
            contact: "",
            email: "",
            password: "",
            confirmPassword1:"",
            firstnameError:"",
            contactError:"",
            emailError:"",
            passwordError:"",
            confirmPasswordError:""

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateInput=this.validateInput.bind(this);
        this.checkNewUser=this.checkNewUser.bind(this);
       // this.confirmPassword=this.confirmPassword.bind(this)
    }
    
    
    async checkNewUser()
    {
        let emailError="";
        const data = await axios.get("http://localhost:3000/users?email=" + this.state.email)
        if(data.data[0])
        {   
            console.log(data.data[0])
            emailError="user Id already exist"
            this.setState({ emailError })
            return false;  
        }

    }
    validateInput()
    {
        let emailError = "";
        let passwordError = "";
        let contactError="";
        let firstnameError="";
        let confirmPasswordError="";

        if (!this.state.email) {
            emailError = "Email is required"
        }
        if (!this.state.password) {
            passwordError = "Password is required"
        }
        if (!this.state.contact) {
            contactError = "Contact is required"
        }
        if (!this.state.firstname) {
            firstnameError = "Firstname is required"
        }
        if(this.state.password!=this.state.confirmPassword1)
        {
            confirmPasswordError="Password does not match"
        }
        

        if (this.state.email !== undefined) {
            let lastAtPos = this.state.email.lastIndexOf('@');
            let lastDotPos = this.state.email.lastIndexOf('.');
            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.email.indexOf('@@') == -1 && lastDotPos > 2 && (this.state.email.length - lastDotPos) > 2)) {
                emailError = "Email is Invalid"
            }
        }

        if (emailError || passwordError || firstnameError || contactError || confirmPasswordError) {
            this.setState({ emailError, passwordError,firstnameError,contactError,confirmPasswordError })
            return false;
        }

        return true;
    }
    
    handleChange(event) {
        console.log("yes")
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {

        event.preventDefault();
        if (this.validateInput()) {
            if(this.checkNewUser()){
            console.log("data")
            const user = {
                email: this.state.email,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                contact: this.state.contact,
                password: this.state.password
            }
            axios.post("http://localhost:3000/users", user).then((data) => {
                console.log(data)

            })}
            else{

            }
        }
    }
    render() {


        return (
            <div>

                <div class="container" >
                    <form >
                        <div class="row">
                            <label >First Name</label>
                            <input type="text" onChange={this.handleChange} name="firstname" placeholder="Enter your First Name"></input>
                            <p style={{ fontSize: "12", color: 'red' }}>{this.state.firstnameError}</p>
                        </div>

                        <div class="row">
                            <label >Last Name</label>
                            <input type="text" onChange={this.handleChange} name="lastname" placeholder="Enter your Last Name"></input>
                           
                        </div>

                        <div class="row">
                            <label >Contact Number</label>
                            <input type="text" onChange={this.handleChange} name="contact" placeholder="Enter your contact number"></input>
                            <p style={{ fontSize: "12", color: 'red' }}>{this.state.contactError}</p>
                        </div>

                        <div class="row">
                            <label >Email Id</label>
                            <input type="text" onChange={this.handleChange} name="email" placeholder="Enter your contact number"></input>
                            <p style={{ fontSize: "12", color: 'red' }}>{this.state.emailError}</p>
                        </div>

                        <div class="row">
                            <label >Password</label>
                            <input type="text" onChange={this.handleChange} name="password" placeholder="Enter Password"></input>
                            <p style={{ fontSize: "12", color: 'red' }}>{this.state.passwordError}</p>
                        </div>

                        <div class="row">
                            <label >Confirm Password</label>
                            <input type="text" onChange={this.handleChange} name="confirmPassword1" placeholder="Confirm your Password"></input>
                            <p style={{ fontSize: "12", color: 'red' }}>{this.state.confirmPasswordError}</p>
                        </div>




                        <div class="row" style={{ paddingtop: 1 }} >
                            <button type="submit" style={{ marginLeft: 5 }, { marginTop: 16 }, { margin: 5 }} onClick={this.handleSubmit}>SignupLogin</button>

                            <button type="submit" style={{ marginLeft: 5 }, { marginTop: 16 }, { margin: 5 }}> Back</button>
                            <button type="submit" style={{ marginLeft: 5 }, { marginTop: 16 }, { margin: 5 }}> Reset</button>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

export default Signup;