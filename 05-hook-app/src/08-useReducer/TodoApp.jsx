import React, { useReducer } from 'react'
import { TodoAdd } from './components/TodoAdd'
import { TodoItem } from './components/TodoItem'
import { TodoList } from './components/TodoList'
import { todoReducer } from './todoReducer'


const initialState = [{
    id: new Date().getTime(),
    description : 'Recolectar la piedra del alma',
    done: false
},{
    id: new Date().getTime() * 3,
    description : 'Recolectar la piedra del tiempo',
    done: false 
}]


export const TodoApp = () => {



  const [todos, dispatch] = useReducer(todoReducer, initialState)
  
  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }
    dispatch(action);
  
  }
  
  return (
    <>
        <h1>TodoApp: 10 <small>pendientes : 2</small></h1>
        <hr/>


        <div className='row'>
          <div className='col-7'>
            {/*TodoList*/}
            <TodoList todos = {todos}/>
            {/*Fin TodoList*/}
          </div>
          <div className='col-5'>

            <h4>Agregar TODO</h4>
            <hr />
            {/*TodoApp onNewTodo(todo)*/}
            <TodoAdd onNewTodo={handleNewTodo}/>
            {/*Fin TodoApp*/}
          </div>

        </div>

    </>
  )
}
