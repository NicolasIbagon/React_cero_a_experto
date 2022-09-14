import {screen,fireEvent, render } from "@testing-library/react"
import {TodoItem} from '../../src/08-useReducer/components/TodoItem'

describe('Pruebas en el componente <TodoItem/>', () => { 

    const todo = {
        id:1,
        description: 'Piedra del Alma',
        done: false
    }

    const onDeleteTodo = jest.fn();
    const onToggleTodo = jest.fn();

    beforeEach(()=>{
        jest.clearAllMocks();
    })

    test('Debe de mostrar el componente todo pendiendte', () => { 
        render(<TodoItem todo={todo} onDeleteTodo = {onDeleteTodo} onToggleTodo = {onToggleTodo}/>);

        const listElement = screen.getByRole('listitem');
        


        expect(listElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center false')


     })

     test('Debe de mostrar el componente todo completado', () => { 

        todo.done = true;

        render(<TodoItem todo={todo} onDeleteTodo = {onDeleteTodo} onToggleTodo = {onToggleTodo}/>);


        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center text-decoration-line-through')


     })

     test('Span debe de llamar el ToogleTodo cuando se hace click', () => { 
        render(<TodoItem todo={todo} onDeleteTodo = {onDeleteTodo} onToggleTodo = {onToggleTodo}/>);

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);
        expect(onToggleTodo).toHaveBeenCalledWith(todo.id);
      })

      test('Boton debe de llamar el deleteTodo', () => { 

        render(<TodoItem todo={todo} onDeleteTodo = {onDeleteTodo} onToggleTodo = {onToggleTodo}/>);
        const buttonElement = screen.getByRole('button')
        fireEvent.click(buttonElement);
        expect(onDeleteTodo).toHaveBeenCalledWith(todo.id);

       })

    
 })