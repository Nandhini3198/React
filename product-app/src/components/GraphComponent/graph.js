import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import axios from 'axios'

class graph extends Component {

    

    componentDidUpdate() {
        axios.get("http://localhost:3000/allProducts?type="+this.props.category).then(
            (data)=>
            {
                console.log(data.data)
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
   













    constructor(props) {
        super(props)
        this.state = {
            chartData: {

            },
            category:this.props.category
            
           

        }

        //this.getGraph()


    }
    render() {
        return (
            <div className="chart">
                {this.props.category}
                <Bar
                    data={this.state.chartData}
                    width={100}
                    height={50}

                />

            </div>
        );
    }
}

export default graph;