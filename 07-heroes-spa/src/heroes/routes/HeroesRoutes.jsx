import { Navbar } from "../../ui/components"
import { Routes, Route,Navigate } from "react-router-dom"
import { MarvelPage } from "../pages/MarvelPage"
import { DcPage } from "../pages/DCPage"
import { Search } from "../pages/Search"
import { Hero } from "../pages/Hero"
export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className="container">
            <Routes>
            <Route path="marvel" element = {<MarvelPage/>}/>
            <Route path="dc" element = {<DcPage/>}/>
            <Route path="search" element = {<Search/>}/>
            <Route path="hero/:heroId" element = {<Hero/>}/>
            
            <Route path="/" element = {<Navigate to="/marvel"/>}/>
            
            </Routes>
        </div>
    </>
  )
}
