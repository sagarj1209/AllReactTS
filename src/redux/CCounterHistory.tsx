import React from "react";
import Card from "../components/Card";
import {connect} from "react-redux"

class CCounterHistory extends React.Component<any>
{
    render(){
        return(
            <Card title="CCounterHistory">
                <h6>Counter History is here</h6>
                <p>
                    Number of counters in history : {this.props.HIST.length}
                </p>
                <p>
                    Time : {this.props.TIME}
                </p>
                {
                    this.props.HIST.map((c:any)=>{
                        return(

                        <div key={c}>
                            <span>{c}</span><br/>
                        </div>
                        )
                    })
                }
            </Card>
        )
    }
}

const mapStateToProps = (state:any)=>{
    return{
        HIST:state.history,
        TIME:state.time
    }
}

let hoc = connect(mapStateToProps,null)

export default hoc(CCounterHistory)