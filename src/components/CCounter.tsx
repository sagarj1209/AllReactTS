import React from "react";
import Card from "./Card";

interface MyState 
{
    counter:number,
    message:string
}

class CCounter extends React.Component<any,MyState>
{

    constructor(props:any){
        
        super({props});


        //Initialise the state
        this.state={
            counter:props.InitialCount,
            message:"Hello"
        }
    }
    render()
    {
        return(
            <Card title={<h1>CCounter</h1>}>
                <button onClick={this.Increment} className="btn btn-warning">Increment</button><br/>
                <span>Counter via state is {this.state.counter}</span><br/>
                <span>Counter via props is {this.props.InitialCount}</span><br/>
                <span>{this.state.message}</span>

            </Card>
        )
    }

    componentDidMount(){
        document.title = `Current counter value is ${this.state.counter}`
    }

    componentDidUpdate(){
        document.title = `Current counter value is ${this.state.counter}`
    }

    Increment = ()=>{

        //change state
        this.setState({
            counter:this.state.counter+1,
            //message:"Welcomee"
        })
    }
}

export default CCounter;