import { useMemo,useState } from "react"
import Card from "./Card";

function FUseMemo()
{
    const [number,setNumber] = useState(0);
    const [count,setCount] = useState(0);


    //const factorial = factorialOf(number);    

    const factorial = useMemo(()=> factorialOf(number),[number]);


    const onChange = (event:any) => {
        setNumber(Number(event.target.value))
    }

    const onClick = ()=> setCount(count + 1);

    return(
        <Card title="FUseMemo">
           Factorial of: <input type="number" value={number} onChange={onChange}></input>
            &nbsp; is {factorial}

            &nbsp;&nbsp;
            <button className="btn btn-primary" onClick={onClick}>Re-Render</button>
            <p>
                count : {count}
            </p>

        </Card>
    )


}

function factorialOf(n:number):number
{
    console.log(`factorial of ${n} called`);
    return n<=0 ? 1 : n * factorialOf(n - 1);
    
}

export default FUseMemo;

