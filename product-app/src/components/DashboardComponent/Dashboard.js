import React from 'react';
import Graph from '../GraphComponent/graph';
import {withRouter} from 'react-router-dom'

class Dashboard extends React.Component {
    constructor(props)
    {
super(props);
this.state={
//reload:this.props.location.state.reload,
//reloadvalue:true
}
//this.reload=this.reload.bind(this)
    }

    // reload()
    // {
    // if(this.state.reload)
    // // {window.location.reload(false)}
    // {
    //     this.state.reload()
    // }
    // this.setState({reloadvalue:false})
    
    // }
    
    render() {
        return (
            <div className="container">
                <div className="graph" style={{width:"50rem"},{height:"50rem"}}><Graph></Graph></div>

            </div>
        )
    }
}
export default withRouter(Dashboard);