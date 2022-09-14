import { todoReducer } from "../../src/08-useReducer/todoReducer"



describe('Pruebas en todoReducer', () => {

    const initialState = [{
        id:1,
        description : 'Demo Todo',
        done: false
    }]

    test('Debe regresar el estado inicial', () => { 

        const newState = todoReducer(initialState, {});

        expect(newState).toBe(initialState);
     });

    test('Agregar TODO', () => { 

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id:2,
                description: 'Nuevo todo #2',
                done: false
            }
        }

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });


    test('Eliminar TODO', () => { 
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1 
        }

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(0);


    });


    test('Debe realizar Toogle del TODO', () => { 
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1 
        }
        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true)
        
        const newState2 = todoReducer(newState, action);
        expect(newState2[0].done).toBe(false)
        
    })

 })