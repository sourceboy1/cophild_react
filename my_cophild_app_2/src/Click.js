
import React from "react";

function Click () {
     function HandleClick () {
        console.log("i was clicked")
     }

    return(
        <div>
            <button onClick={HandleClick} style={{color:"white",backgroundColor:"black",textAlign:"center",fontSize:"xxx-large",}}>click me</button>
        </div>
    )
}

export default Click