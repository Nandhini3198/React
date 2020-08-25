import React, { Component } from 'react';
import axios from 'axios';

class Employee extends Component {
    constructor(){
        super();
  
        this.state = {
         Employees:[]
        } 
      }

    componentWillMount = () => {

        axios.get("http://localhost:3000/allProducts")
          .then((response) => {
              console.log(response)
             this.setState({ Employees: response.data});
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    render() {
        const emp=this.state.Employees.map((emp,index)=>
        {return<tbody key={index}>
            <tr>
                <td>{emp.id}</td>
                <td>{emp.type}</td>
                
            </tr>
        </tbody>})
        return (
            <div>
                <table><thead>
                    <tr><th>id</th>
                    <th>name</th>
                    </tr></thead>{emp}</table>
            </div>
        );
    }
}

export default Employee;