import { useState } from "react";

function Mycounter() {
    let [counter,setCounter] = useState(0);

    const add=()=>{
        setCounter(counter+1)
        console.log(counter);
    }

    const decrease=()=>{
        if(counter>0)
        {
        setCounter(counter-1)
        console.log(counter)
        }
        else{
            alert("Value cannot be decreased further")
        }
    }
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={add}>Add</button>
      <br></br>
      <button onClick={decrease}>Decrease</button>
      <br></br>
    </div>
  );
}

export default Mycounter;
