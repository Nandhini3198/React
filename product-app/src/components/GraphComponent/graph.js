import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import axios from 'axios'

class graph extends Component {

    componentWillMount() {
        var a=0,b=0,c=0,d=0;
        // axios.all([axios.get("http://localhost:3000/allProducts?type=Inventory"),
        // axios.get("http://localhost:3000/allProducts?type=Inventory"),
        // axios.get("http://localhost:3000/allProducts?type=Automobile")]).
        //     then(axios.spread((res1, res2, res3)=> {
        //         this.setState({
        //             chartData: {
        //                 labels: ['Electronics', 'Automobile ', 'Inventory', 'Spare Parts', 'Grooming ', 'HealthCare'],
        //                 datasets: [{
        //                     label: 'Products availability',
        //                     data: [
        //                         res1.data.length, res2.data.length, res3.data.length
        //                     ],
        //                     backgroundColor: ['steelblue', '#000A0', '#2B60DE', 'steelblue', '#000A0', '#2B60DE']
        //                 }
        //                 ]
        //             }
        //         })
        //         console.log(res1,res2,res3)
        //     }))
        axios.get("http://localhost:3000/allProducts").then(
            (data)=>
            {
              const datavalue=data.data;
             console.log(datavalue[0]) 
              for(var i=0;i<datavalue.length;i++)
              {
                  if(datavalue[i].type==='Electronics')
                  {
                      a=a+1;
                      console.log("a"+a)
                  }
                  if(datavalue[i].type==='Grooming')
                  {
                      b++;
                      console.log(b)
                  }
                  if(datavalue[i].type==='Health')
                  {
                      c++;
                      console.log("c"+c)
                  }
                  if(datavalue[i].type==='health')
                  {
                      d++;
                      console.log("c"+c)
                  }
              }
              //console.log(a)
              this.setState({
                            chartData: {
                                labels: ['Electronics', 'Inventory ', 'Automobile', 'Spare Parts', 'Grooming ', 'HealthCare'],
                                datasets: [{
                                    label: 'Products availability',
                                    data: [
                                        a,b,c,d
                                    ],
                                    backgroundColor: ['steelblue', '#000A0', '#2B60DE', 'steelblue', '#000A0', '#2B60DE']
                                }
                                ]
                            }
                        })
            }
        )
        }
   













    constructor() {
        super()
        this.state = {
            chartData: {

            }

        }




    }
    render() {
        return (
            <div className="chart">
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