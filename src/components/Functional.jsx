import  { useState } from 'react';

export default function Functional(props) {
    const [ count, setCount] = useState (0)
    const [ name, setName ] = useState("rizal");

    return (
       
        <div>
            <h1>{props.judul}</h1>
            <h2>{count}</h2>
            <button onClick={()=> setCount(count + 1)}>plus 1</button>
            <input type="text" onChange={(e) => setName (e.target.value)}/>
         
        </div>
    )
}
