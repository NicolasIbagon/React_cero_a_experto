import { configureStore } from "@reduxjs/toolkit"
import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import { LoginPage } from "../../../src/auth/pages/LoginPage"
import { authSlice } from "../../../src/store/auth/authSlice"
import { startGoogleSigIn } from "../../../src/store/auth/thunks"
import { NotAuthenticatedState } from "../../fixtures/authFixtures"


const mockStartGoogleSigin = jest.fn();
const mockStartLoginWithEmailPassword = jest.fn()

jest.mock('../../../src/store/auth/thunks', () => ({
    startGoogleSigIn: () => jest.fn(),
    mockStartLoginWithEmailPassword : ({email, password}) =>{
        return () => mockStartLoginWithEmailPassword({email, password});
    }
}));



jest.mock('react-redux', () =>({
    ...jesta.requireActual('react-redux'),
    useDispatch: () => (fn) => fn(), 
}));



const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    preloadedState : {
        auth : NotAuthenticatedState
    }
})

describe('Pruebas en LoginPage', () => { 

    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrar el componente correctamente', () => { 

        render(
            <Provider store = {store}>
                <MemoryRouter>
                    <LoginPage/>    
                </MemoryRouter>
            </Provider>
        )


        expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1);



     })


     test('Boton de Google debe de llamar el startGoogleSigIn', () => { 
        render(
            <Provider store = {store}>
                <MemoryRouter>
                    <LoginPage/>    
                </MemoryRouter>
            </Provider>
        )

        
        const googleBtn = screen.getByLabelText('google-btn');

        fireEvent.click(googleBtn);

            expect(mockStartGoogleSigin).toHaveBeenCalled();
        

      })

    test('Submit debe de llamar el startLoginWIthEmailPasswasrd', () => { 


        const email = 'nicolas@gmail.com';
        const password = '123456';


        render(
            <Provider store = {store}>
                <MemoryRouter>
                    <LoginPage/>    
                </MemoryRouter>
            </Provider>
        )


        const emailField = screen.getByRole('textbox', {name: 'Correo'});

        fireEvent.change(emailField, {target : {name : 'email', value: email}});

        const passwordField = screen.getByTextId('password', {name: 'Contraseña'});

        fireEvent.change(passwordField, {target : {name : 'password', value: password}});

        const loginForm = screen.getByLabelText('submit-form')


        fireEvent.submit(loginForm);


        expect(mockStartLoginWithEmailPassword).toHaveBeenCalledWith({
            email : email,
            password : password
        })


     })
 })