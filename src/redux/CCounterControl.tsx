import React from "react";
import Card from "../components/Card";
import { connect } from "react-redux";
import * as actions from "./actionCreators"
class CCounterControl extends React.Component<any>
{
    render(){
        return(
            <Card title="CCounterControl">
                <button onClick={()=>this.props.DISPATCH_INCREMENT(actions.IncrementAction())} className="btn btn-danger">Increment</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={()=>this.props.DISPATCH_DECREMENT(actions.DecrementAction())} className="btn btn-danger">Decrement</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={()=>this.props.DISPATCH_SAVETOHISTORY(actions.SaveToHistory())} className="btn btn-danger">Save to History</button>
                <button onClick={()=>this.props.INCREMENT_ASYNC(actions.IncrementAsync())} className="btn btn-danger">Increment Async</button>

                <hr/>
                <p>
                    Current Counter is : {this.props.CTR}
                </p>
            </Card>
        )
    }
}

//Which slices of the state do you want?
const mapStateToProps = (state:any)=>{
    return{
        CTR :state.counter
    }
}

//Which dispatch actions do you want as event handlers?
const mapDispatchToProps = (dispatch:any)=>{
    return{
        DISPATCH_INCREMENT : (action:any)=> dispatch(action),
        DISPATCH_DECREMENT : (action:any)=> dispatch(action),
        DISPATCH_SAVETOHISTORY : (action:any)=> dispatch(action),
        INCREMENT_ASYNC : (asyncaction:any)=> dispatch(asyncaction)
    }
}

let hoc = connect(mapStateToProps,mapDispatchToProps);

export default hoc(CCounterControl);