import { useState } from "react"




export const useCounter = (initialValue = 10)=>{

    const [counter, setCounter] = useState(initialValue)

    const increment = (n = 1) =>{
        setCounter((current) =>current+n)
    }
    
    const decrement = (n = 1) =>{
        setCounter((current) =>current-n)
    }
    
    const reset = (n = initialValue) =>{
        setCounter(n)
    }


    return {
        counter, increment, decrement, reset
    }
}