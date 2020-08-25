import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
import Graph from '../GraphComponent/graph'
import { withRouter } from 'react-router-dom'

class Nav extends Component {

    constructor() {
        super()
        // this.state = {
        //     isLogged: false
        // }

        this.handleSignout = this.handleSignout.bind(this)
        //console.log("user"+JSON.stringify(localStorage.getItem('user')))
        //this.checkLoggin=this.checkLoggin.bind(this)
        //this.checkLoggin()
    }

    handleSignout(event) {
        localStorage.removeItem('user');
        this.setState({
            isLogged: false
        })
        this.props.history.push('/login')
    }
    // componentWillMount() {
    //     if (localStorage.getItem('user')) {
    //         console.log('user' + localStorage.getItem('user'))
    //         this.setState({
    //             isLogged: true
    //         })
    //         //this.props.history.push('/Dash')
    //     }


    // }




    render() {
        return (
            <div>
                <div class="topnav" style={{ textAlign: "center" }}>
                    <div>
                        <div className="topnav-left">
                            {localStorage.getItem('user') ? <div>


                                <Link to="/Dash">Dashboard</Link>
                                <Link to="/List">Product List</Link>
                            </div> : <div>  <Link to="/Login">Login</Link>
                                    <Link to="/SignUp">Sign Up</Link></div>}


                            {localStorage.getItem('user') ? <div className="topnav-right btn btn-success">
                                <p>Welcome {JSON.stringify(localStorage.getItem('user'))}
                                    <button type="button" onClick={this.handleSignout}>SignOut</button></p>

                            </div> : ""}

                        </div>
                        
                    </div>
                </div>
                
                </div>



                

       
            
        );
    }
}

export default withRouter(Nav);