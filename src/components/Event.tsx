import React from "react";
import Card from "./Card";

class Event extends React.Component
{
    private message:string = "";
    public render()
    {
        return(
            <Card title={<h1>Event Handling</h1>}>
                <button onClick={()=>this.doSomething('button1')} className="btn btn-primary">Button 1</button><br></br><br></br>
                <button onClick={()=>this.doSomething('button2')} className="btn btn-primary">Button 2</button>
            </Card>
        )
    }

    doSomething=(b:string)=>{
        console.log(`${b} is clicked`);
        this.message="Hellloooo";
        console.log(this.message);
        
    }
}

export default Event;