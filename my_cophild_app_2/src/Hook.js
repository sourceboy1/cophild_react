import React, { useState } from "react";

// import { useState } from "react";

function Hook () {
    const [value] = useState("yes")
    const [values] = useState("no")
    const [count,setCount] = useState(10)
    const [counts, setCounts] = useState(10)

    console.log(value)
    console.log(values)
    console.log(count)
    console.log(counts)

    function handleCount (){
        setCounts(counts + 1)
    }

    return(
        <div>
            <h1>Is this your first time doing Hook up? </h1>
            <h3>{ value }this is the first time </h3>
            <h1>Is this your first time doing Hook up? </h1>
            <h3>{ values }this is the first time </h3>
            <h1>{count}</h1>
            <button onClick={() => setCount(1)}>click to count</button>
            <h1>{count}</h1>
            <button onClick={handleCount}>click to count</button>
        </div>
    )
}

export default Hook;
