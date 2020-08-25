import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import axios from 'axios'

class graph extends Component {

    
    getCategories()
    {
        axios.get("http://localhost:3000/Categories").then(data=>
        {
            //console.log("getting Categories")
            let arr=[]
            for(const data1 of data.data)
            {
                arr.push(data1.cname)
            }
            this.setState({
                Categories:arr
            })
           // console.log("arr"+arr)
           // console.log("cate"+this.state.Categories)
        })
    }
    
    handleCategory(event)
    {
      this.setState({
         [event.target.name]:event.target.value
      })
     
    }
    componentDidUpdate() {
        axios.get("http://localhost:3000/allProducts?type="+this.state.category).then(
            (data)=>
            {
                //console.log(data.data)
              let arr=[];
              let arr1=[];

              for(const data1 of data.data)
              {
                 arr.push(data1.pname)
                 arr1.push(data1.availability)
              }
              //console.log(arr1)
              this.setState({
                            chartData: {
                                labels:arr,
                                datasets: [{
                                    label: 'Products availability',
                                    data: arr1,
                                    backgroundColor: ['steelblue', '#000A0', '#2B60DE', 'steelblue', '#000A0', '#2B60DE']
                                }
                                ]
                            }
                        })
            }
        )
        }
   
componentWillMount()
{
    this.getCategories()
}

    constructor(props) {
        super(props)
        this.state = {
            chartData: {

            },
            Categories:[],
            category:""
           
            
           

        }

        //this.getGraph()
        this.getCategories=this.getCategories.bind(this)
        this.handleCategory=this.handleCategory.bind(this)

    }
    render() {
        const category=this.state.Categories.map((category)=>
        {return <option value={category} >{category}</option>})
        return (<div>
              <div class="row">
                    
                    <label >Select Category</label>
                    
                    <select style={{width:"20rem"}} name="category" onChange={this.handleCategory} >
                      <option value="Default" >Choose a category</option>
                     {category}
                  </select>
                    </div>
            <div className="chart">
                
                <Bar
                    data={this.state.chartData}
                    width={100}
                    height={50}

                />

            </div>
            </div>
        );
    }
}

export default graph;