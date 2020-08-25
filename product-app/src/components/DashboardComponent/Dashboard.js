import React from 'react';
import Graph from '../GraphComponent/graph';
import {withRouter} from 'react-router-dom';
import axios from 'axios'

class Dashboard extends React.Component {
    constructor(props)
    {
super(props);
this.state={
    add:false,
    category:"",
    Categories:[],
    products:"",
    new:""

}
//this.getCategories()
//this.getCategories=this.getCategories.bind(this)
this.newCategory=this.newCategory.bind(this)
this.handleClick=this.handleClick.bind(this)
//this.handleCategory=this.handleCategory.bind(this)
this.handlesubmit=this.handlesubmit.bind(this)
    }
    newCategory(event)
    {
        this.setState({
            newCategory:event.target.value
        })
        //event.target.value=""
    }
    componentWillMount()
    {
        //this.getCategories()
    }
    componentWillUpdate()
    {
      //this.getCategories()
        //console.log("cate"+this.state.Categories)
        //this.props.history.push('/Dash')
    }
    

    handleClick()
    {
        this.setState({
            add:!this.state.add
        })
    }
    handlesubmit()
    {
        const cat={
            cname:this.state.newCategory,
            availability:0
        }
        
        //console.log("cat"+cat.category)
        const data=axios.post("http://localhost:3000/Categories",cat).then(data=>
        {
            console.log("new"+data)
            //this.props.history.push('/Dash')
            this.setState({
                add:false
            })
        })
    }
    
    
    render() {
        //console.log(this.state.Categories)
        
        return (
            <div style={{width:"50rem"}}className="container">
                <button type="submit" onClick={this.handleClick} name="category" >Add Category</button>
                {this.state.add?<div><input type="text" onChange={this.newCategory} name="category" style={{width:"13rem",float:"left"}} ></input>
                <button type="submit" onClick={this.handlesubmit}>Add</button></div>:"" }
              
              
    
                <div ><Graph style={{width:"20rem"}}></Graph></div>

            </div>
        )
    }
}
export default withRouter(Dashboard);