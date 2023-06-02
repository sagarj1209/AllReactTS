import { useEffect,useState } from "react";
import Card from './Card';

function FUseEffect()
{

    const [counter1,setCounter1]= useState(0);
    const [counter2,setCounter2]= useState(10);

    useEffect(()=>{
        //simulation of componentDidMount() and componentDidUpdate()
        console.log(`useEffect called, state1 is ${counter1}`);
        console.log(`useEffect called, state2 is ${counter2}`);

        document.title = `counter 1 and 2 : ${counter1} ${counter2}`
        
        return() =>{
            //simulation of componentWillUnMount
            console.log(`useEffect cleaned called, state1 is ${counter1}`);
            console.log(`useEffect cleaned called, state2 is ${counter2}`);
        }
            
        
        
    })

    return(
            <Card title="FUseEffect">

                <p>
                    Counter1 : {counter1}
                </p>
                <p>
                    Counter2 : {counter2}
                </p>

                <button onClick={IncrementCounter1} className="btn btn-primary"> Increment counter1</button>

                &nbsp;&nbsp;&nbsp;

                <button onClick={IncrementCounter2} className="btn btn-primary"> Increment counter2</button>


            </Card>



    )

    function IncrementCounter1(){
        setCounter1(counter1+1)
    }
    function IncrementCounter2(){
        setCounter2(counter2+1)
    }

}

export default FUseEffect;