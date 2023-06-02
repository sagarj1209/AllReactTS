import { ActionNames } from "../actionNames";
import { appState } from "../appState";

const rootReducer = (currentState:any = appState,action:any)=>{

    // console.log(`rootReducer Called. State is ${JSON.stringify(currentState)}`);

    //check action
    let currentCounter:number;
    switch(action.type)
    {
        case ActionNames.INC:
            {
                console.log("Increment Dispatched");
                
                currentCounter = currentState.counter;
                ++currentCounter;

                return{
                    ...currentState,
                    counter:currentCounter
                }
            }
        case ActionNames.DEC:
            {
                console.log("Decrement Dispatched");
                currentCounter = currentState.counter;
                --currentCounter;

                return{
                    ...currentState,
                    counter:currentCounter
                }
            }
        case ActionNames.HIS:
            {
                return{
                    ...currentState,
                    history:[...currentState.history,currentState.counter]
                }
            }

        default:
            {
                return{
                    ...currentState
                }
            }    
    }
 
}

export {rootReducer};