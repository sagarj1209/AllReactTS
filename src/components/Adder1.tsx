import React from "react";
import Card from "./Card";
import { PropTypes } from "./PropTypes";

class Adder1 extends React.Component<PropTypes>   //Class component
{
    public render(){

        let titlemarkup=<h1>adder class component</h1>
        return(
            <Card title={titlemarkup}>
            <span>First number : {this.props.n1}</span><br></br>
            <span>Second number : {this.props.n2}</span><br></br>
            {/* <button onClick={sum}>Add</button> */}
            <span>Addition is : {this.props.n1+this.props.n2}</span>
            
        
      
        </Card>
        )
    }
    }

    export default Adder1;

