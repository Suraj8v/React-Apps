import { useState } from "react";


export default function Counter()
{
    let [count,setCount] = useState(0);

    const add=()=>{
        count = count+1;
        console.log(count)
        setCount(count)
    }

    const decrease=()=>{
        if(count>0){
        count=count-1;
        console.log(count)
        setCount(count)
        }
        else{
            alert("cannot go below zero!!")
        }
    }

    return(
        <div className="maindiv">
            <h1>count : {count}</h1>
            <br/>
            <button onClick={add}>Add</button>
            <br></br>
            <button onClick={decrease}>Decrease</button>
            <br></br>
            <div>counter : {count}</div>

        </div>
    )
}