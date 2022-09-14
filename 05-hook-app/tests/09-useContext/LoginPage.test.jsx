import { prettyDOM, render,screen, fireEvent} from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/userContext";
import {LoginPage} from "../../src/09-useContext/LoginPage"

describe('Pruebas en <LoginPage/>', () => {


    const user = {
        id: 2,
        name: 'Nicolas'
        
    }


    test('Debe de mostrar el componente sin el usuario', () => { 
        render( <UserContext.Provider value= {{user:null}}>
                    <LoginPage/>
                </UserContext.Provider>);

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');

     })


    test('Debe de llamar el setUser cuando se hace click en el boton', () => { 

        const setUserMock = jest.fn();
        render( <UserContext.Provider value= {{user:null, setUser : setUserMock}}>
                    <LoginPage/>
                </UserContext.Provider>);

        const buttonElement = screen.getByRole('button')
        fireEvent.click(buttonElement);
        expect(setUserMock).toHaveBeenCalledWith({id:123, name:'Juan', email:'juan@gmail.com'});
     })
 })