import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./routers/AppRouter"
import { AppTheme } from "./theme/AppTheme"



export const JournalApp = () => {
  return (
    <AppTheme>
      <AppRouter/>
    </AppTheme>
  )
}
