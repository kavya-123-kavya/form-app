//nested components- use arroy functions

import React from "react"
import TestComp from "./TestComp"


const Mango=()=>{
    return(
        <h1>Mangoes are 
            Sweet
        </h1>
    )
}

const Grape=()=>{
    return(
        <h1>Grapes are another component in a nested Conpoment</h1>
    )
}

function Sample(){
    return(
        <div>Sample Component Nested Components
            <Mango/>
            <Grape/>
            <TestComp/>
        </div>       
    )
}

export default Sample