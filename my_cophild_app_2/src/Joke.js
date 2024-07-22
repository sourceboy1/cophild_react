import React from "react";

function Joke (props) {
    return (
        <div>
            <h1 style={{color: "black", backgroundColor:"green",textAlign:"center",fontSize:"xxxx-large"}}>Question:{props.question}</h1>
            <h3 style={{color: "black", backgroundColor:"gold",textAlign:"end",fontSize:"xxx-large"}}>Punchline:{props.punchline}</h3>
        </div>
    )

}

export default Joke