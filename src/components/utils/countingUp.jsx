import React,{Component} from "react";

import CountUp from 'react-countup';

class CountingUp extends Component{
   render(){
    return(
        <div className="countup-section bg-secondary">
        <div className="count">
            <span className="count-number"><CountUp end={1000} duration={2} suffix="+"/></span>
            <span className="count-text"> Clients Served</span>
        </div>
        <div className="count">
            <span className="count-number"><CountUp end={500} duration={2}  suffix="+"/></span>
            <span className="count-text"> Projects Completed</span>
        </div>
        <div className="count">
            <span className="count-number"><CountUp end={300} duration={2} suffix="+"/></span>
            <span className="count-text"> Team Members</span>
        </div>
        <div className="count">
            <span className="count-number"><CountUp end={100} duration={2} suffix="%" /></span>
            <span className="count-text">Satisfactory</span>
        </div>
    </div>
    
    )
   }
}
export default CountingUp;