import { useState } from "react"
import { UserContext } from "./userContext"


const Initialuser = {
    user: 'NicolasIbagon',
    email: 'nicolasibagon@gmail.com'
}



export const UserProvider = ({children}) => {

  const [user,setUser] = useState(Initialuser)

  return (
    <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
  )
}
