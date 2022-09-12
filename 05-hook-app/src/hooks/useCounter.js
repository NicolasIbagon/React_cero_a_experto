import { useState } from "react"




export const useCounter = (initialValue = 10)=>{

    const [counter, setCounter] = useState(initialValue)

    const increment = (n = 1) =>{
        setCounter(counter+n)
    }
    
    const decrement = (n) =>{
        setCounter(counter-n )
    }
    
    const reset = (n) =>{
        setCounter(n)
    }


    return {
        counter, increment, decrement, reset
    }
}