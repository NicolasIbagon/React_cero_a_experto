import { HeroesRoutes } from "../../../07-heroes-spa/src/heroes/routes/HeroesRoutes"

import {Routes, Route} from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/auth/*" element={<AuthRoutes/>}/>


        <Route path="/*" element={<JournalRoutes/>}/>

        <Route/>
    </Routes>
  )
}
