import React, { useState } from 'react'
import { useEffect } from "react"
import Demo from './components/Demo'
function App() {
    const [state, setState] = useState("App")
   async function printMessage() {
        console.log("Hey i run infinitely")
        setState("sdcmbs,xzgch")
    }
    useEffect(() => {
        printMessage()
    })
    return (
        <div>
            <Demo />
            </div>
    )
}

export default App