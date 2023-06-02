import Card from "./Card";
import {Emp } from "./PropTypes";

function Employee(props:Emp){

    let titlemarkup = <h1>Emp Details</h1>
    return(
            <Card title={titlemarkup}>
            
            {props.empdetails.empname}<br></br>
            {props.empdetails.empid}<br></br>
            {props.empdetails.address.city}<br></br>
            </Card>
        
    )
}

export default Employee;