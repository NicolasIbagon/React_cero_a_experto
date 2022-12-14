import { render,screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route} from "react-router-dom"
import { AuthContext } from "../../src/auth/context/AuthContext"
import { PublicRoute } from "../../src/router/PublicRoute"

describe('Pruebas en PublicRoute', () => {
    test('Debe de mostrar el children si no esta autenticado', () => { 

        const contextValue = {logged:false}
        
        
        render( 
            <AuthContext.Provider value = {contextValue}>
                    <PublicRoute><h1>ruta publica</h1></PublicRoute>
            </AuthContext.Provider>
        );



        expect(screen.getByText('ruta publica')).toBeTruthy();
     })
     test('Debe de navegar si esta autenticado', () => { 

        const contextValue = {
            logged:true,
            user: {
                name: 'Nicolas',
                id: 'ABC'
            }
        }
        
        
        render( 
            <AuthContext.Provider value = {contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element = {<PublicRoute><h1>ruta publica</h1></PublicRoute>} />
                        <Route path='marvel' element={<h1>Página Marvel</h1>}></Route>
                    </Routes>
                    
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Página Marvel')).toBeTruthy();

     })

    
 })