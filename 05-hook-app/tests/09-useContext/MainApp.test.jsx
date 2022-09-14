import { render , screen} from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import {MainApp} from "../../src/09-useContext/MainApp"


describe('Pruebas en componente <MinApp/>', () => { 
    test('Debe de mostar el HomePage', () => { 

        render(
        <MemoryRouter initialEntries={['/login']}><MainApp/></MemoryRouter>
        )
        

        expect(screen.getByText('LoginPage')).toBeTruthy()

     })
 })