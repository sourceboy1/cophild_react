import React from "react";
import Joke from "./Joke"

function App () {
    return(
      <>
      <Joke 
       question="what is react"
       punchline= "go search google"
      />
      <Joke 
       question="what is components"
       punchline= "you can do that by your self"
      />
      <Joke 
       question="why are we doing react"
       punchline= "for your purpose"
      />
      </>
    )
}

export default App;


