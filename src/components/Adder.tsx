import Card from "./Card";
import { PropTypes } from "./PropTypes";

function Adder(props:PropTypes){

//  let n1:number = props.n1;
//  let n2:number = props.n2;
//  let res = (n1+n2);
let titlemarkup=<h1>adder func component</h1>
    return(
            <Card title={titlemarkup}>

            <span>First number : {props.n1}</span><br></br>
            <span>Second number : {props.n2}</span><br></br>
            {/* <button onClick={sum}>Add</button> */}
            <span>Addition is : {props.n1+props.n2}</span>
            </Card>
            
        
      
        

    )
    
}

export default Adder;