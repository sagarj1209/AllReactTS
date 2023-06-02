
import React from "react";
import Card from "../components/Card";
import { connect } from "react-redux";

class CCounterResult extends React.Component<any>
{
    // constructor(){
    //     super({});
    // }
    render(){
        return(
            <Card title="CCounterResult">
                <h6>Current Counter is {this.props.CTR}</h6>
            </Card>
        )
    }
}

const mapStateToProps = (state:any)=>{
    return{
        CTR :state.counter
    }
}

let hoc = connect(mapStateToProps,null);
export default hoc(CCounterResult);

// export default connect(null,null)(CCounterResult);