import { render,screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route} from "react-router-dom"
import { AuthContext } from "../../src/auth/context/AuthContext"
import { PublicRoute } from "../../src/router/PublicRoute"

describe('Pruebas en PublicRoute', () => {
    test('Debe de mostrar el children si esta autenticado', () => { 

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged:true,
            user:{
                id:'ABC',
                name: 'Nicolas'
            }
        }
        
        
        render( 
            <AuthContext.Provider value = {contextValue}>
                <MemoryRouter>
                    <PublicRoute><h1>ruta privada</h1></PublicRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );



        expect(screen.getByText('ruta privada')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalled();
     })

 })