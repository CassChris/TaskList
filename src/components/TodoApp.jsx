import React, { useState } from 'react'
import { Todo } from './Todo';

export const TodoApp = () => {

    const [title, setTitle] = useState('');
    const [todos, setTodos] = useState([]);

 

    const handleChange = (e) =>{
        const value = e.target.value;
        setTitle(value);
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();

        const newTodo = {
            completed: false,
            id: crypto.randomUUID(),
            title: title,
        }
        
        // si el campo no presenta titulo no crear tarea
        newTodo.title !== '' && setTodos([newTodo, ...todos])
        
        setTitle('');
        
    }

    function handleUpdate(id, value){
        const temp = [...todos];
        const item = temp.find(item => item.id === id);
        item.title = value;
        setTodos(temp)
    }

    function handleDelete(id){
        const temp = todos.filter(item => item.id !== id);
        setTodos(temp);
        
    }

  return (
    <div className='p-5 bg-dark container'>
    <h1 className='text-white text-center mb-5'>LISTA DE TAREAS</h1>
        <form 
        className='row'
        onSubmit={handleSubmit}
        >
        <h2 className='text-white'>Crear Tarea:</h2>
            <input
                className='form-control'
                type="text"
                value={title}
                onChange={handleChange}
            />

            <input 
                className='btn btn-primary mt-2'
                type="submit"
                value='Crear'
                onClick={handleSubmit}
            />

        </form>

        <div className='bg-secondary rounded mt-3'>
            
                {
                   todos.map(item => (
                    <Todo 
                     key={item.id}
                     item={item}
                     onUpdate={handleUpdate}
                     onDelete={handleDelete}
                      />
                ))
                }
            
        </div>
    </div>
  )
}
