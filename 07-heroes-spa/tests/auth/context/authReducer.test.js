import {authReducer} from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types";

describe('Pruebas en authReducer', () => { 
    
    
    
    test('Debe de retornar estado por defecto', () => { 

        const state = authReducer({logged: false}, {}); 

        expect(state).toEqual({logged:false});

    })


    test('Debe de llamar login, autenticar, y establecer el usuario', () => { 

        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: 'Nicolas'
            }
        }


        const state = authReducer({logged: false}, action);

        expect(state).toEqual({
            logged: true,
            user: action.payload
        });

        
    })


    test('Debe de llamar logout, borrar el name del usuario y logged en false', () => { 

        const action = {
            type: types.logout,
        }


        const state = authReducer({logged: true, user: {
            id: 'ABC',
            name: 'Nicolas'}}, action);

        expect(state).toEqual({
            logged: false,
        });

    })
 })