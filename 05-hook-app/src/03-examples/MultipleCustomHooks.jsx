import { useFetch,useCounter } from "../hooks"
import { LoadingQuote, Quote } from "./"
 

export const MultipleCustomHooks = () => {

  const {counter, increment} = useCounter(1)



  const {error, data, isLoading} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)


  return (
    <>
        <h1>Breaking Bad Qoutes</h1>
        <hr/>    


        { isLoading ? (<LoadingQuote/>) 
        
        : (   <Quote quote = {data[0].quote} author = {data[0].author} /> )
        }
        

    <button className="btn btn-primary" 
            disabled = {isLoading}
            onClick={()=>increment()}> Next Quote</button>

    </>
  )
}
