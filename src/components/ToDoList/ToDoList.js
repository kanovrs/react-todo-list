import { useState } from 'react';

import './todo-list.css'

function ToDoList() {
    const firstTodos = [
        { text: 'learn book', completed: false },
        { text: 'Have lunch', completed: false },
        { text: 'go to a shop', completed: false },
    ];

    const [todos, setTodos] = useState(firstTodos);
    const [newTodo, setNewTodo] = useState('');

    const inputChange = (event) => {
        setNewTodo(event.target.value);
    };

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, { text: newTodo, completed: false }]);
            setNewTodo('');
        }
    }

    const toggleTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    }

    const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  }
    

    return (
        <div className='todo-list'>
            <h1>Todo List</h1>
            <div>
                <input 
                    type='text'
                    placeholder="Enter a new todo"
                    value={newTodo}
                    onChange={inputChange}
                />
                <button className='todo-list__btn' onClick={addTodo}>Add Todo</button>
            </div>

            <ul className='todo-list__block'>
                {todos.map((todo, index) => (
                    <li className='todo-list__elem'
                        key={index}
                        onClick={() => toggleTodo(index)}
                        style={{
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            cursor: 'pointer',
                            color: todo.completed ? 'red' : 'black',
                        }}
                    >
                        {todo.text}
                        <button onClick={(e) => { e.stopPropagation(); removeTodo(index); }}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
