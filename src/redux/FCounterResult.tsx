import { useSelector,useDispatch } from "react-redux";
import Card from "../components/Card";
import * as actions from "./actionCreators"

function FCounterResult()
{
    const result = useSelector(mapStateToProps);
    const dispatch = useDispatch();
    return(
        <Card title="FCounterResult">
            <h6>Counter : {result.CTR}</h6>
            <h6>{JSON.stringify(result.HIST)}</h6>
            <hr/>
            <button onClick={Increment}>INCREMENT</button>



        </Card>

)
function Increment(){
    dispatch(actions.IncrementAction());
}
}


function mapStateToProps(state:any)
{
    return{
        CTR:state.counter,
        HIST:state.history
    }
}

export default FCounterResult;