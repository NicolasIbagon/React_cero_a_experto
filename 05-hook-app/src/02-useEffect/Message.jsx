import { useEffect } from "react"

export const Message = () => {
    
    useEffect(() => {
      console.log('Message Mointed')
    
      return () => {
        console.log('Message Unmounted')
      }
    }, [])
    

    
    return (
    <>
        <h3>Usuario ya existe</h3>
    </>

    )
}
