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
    products:""

}
//this.handleCtegories=this.handleCategories.bind(this)
this.handleClick=this.handleClick.bind(this)
this.handleCategory=this.handleCategory.bind(this)
this.handlesubmit=this.handlesubmit.bind(this)
    }
    componentWillMount()
    {
        axios.get("http://localhost:3000/Categories").then(data=>
        {
            console.log("getting Categories")
            let arr=[]
            for(const data1 of data.data)
            {
                arr.push(data1.cname)
            }
            this.setState({
                Categories:arr
            })
            console.log("arr"+arr)
            console.log("cate"+this.state.Categories)
        })
        //console.log("cate"+this.state.Categories)
    }

    handleCategory(event)
    {
      this.setState({
          category:event.target.value
      })
     
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
            cname:this.state.category,
            availability:0
        }
        console.log("cat"+cat.category)
        const data=axios.post("http://localhost:3000/Categories",cat).then(data=>
        {
            console.log("new"+data)
        })
    }
    
    
    render() {
        console.log(this.state.Categories)
         const category=this.state.Categories.map((category)=>
        {return <option value={category} >{category}</option>})
        return (
            <div style={{width:"50rem"}}className="container">
                <button type="submit" onClick={this.handleClick} name="category" >Add Category</button>
                {this.state.add?<div><input type="text" onChange={this.handleCategory} name="category" style={{width:"13rem",float:"left"}} ></input>
                <button type="submit" onClick={this.handlesubmit}>Add</button></div>:"" }
              
                <div class="row">
                    
              <label >Select Category</label>
              
              <select style={{width:"20rem"}} name="type" onChange={this.handleCategory} >
                <option value="Default" >Choose a category</option>
               {category}
            </select>
              </div>
    
                <div ><Graph style={{width:"20rem"}} category={this.state.category}></Graph></div>

            </div>
        )
    }
}
export default withRouter(Dashboard);