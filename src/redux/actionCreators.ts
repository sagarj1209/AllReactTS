import { ActionNames } from "./actionNames"
export function IncrementAction(){
    console.log("IncrementAction called");
    
    return{
        type:ActionNames.INC
    }
}
export function DecrementAction(){
    return{
        type:ActionNames.DEC
    }
}
export function SaveToHistory(){
    return{
        type:ActionNames.HIS
    }
}


//async action creator
export function IncrementAsync()
{
    console.log("IncrementAsync() called");
    
    return(dispatch:any)=>{

        console.log("Inside function returned by IncrementAsync()");
        
        //write your async logic
        setTimeout(()=>{
            //invoke sync action creator from gere and dispatch the action
            dispatch(IncrementAction())
        },5000)
        
    }
}