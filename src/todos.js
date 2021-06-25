import React, {useState} from 'react';
import './App.css';
import TodoDivs from './todo-divs';
import TodoForm from './Todo-form';



function TodoList () {

const [todos, setTodos] = useState([]);

const addTodo = (todo) => {

    const newTodos = [...todos, todo];

    setTodos(newTodos);
    

}

const handleDelete = (id) => {

    const deletedTodos = [...todos].filter(todo => todo.id !== id); 

    setTodos(deletedTodos);
}

const toggleComplete = (id) => {

    const updatedTodos = [...todos].map(todo => {
        if(todo.id === id) {
            todo.completed = !todo.completed
        }
        return todo
    })

    setTodos(updatedTodos);
}


const updatedTodos = (id, newValue) => {

    setTodos(prevState => prevState.map(todo => todo.id === id ? newValue: todo))

}


    return (
        <div className= 'tasklist'>
            <h1>Your to do list!</h1>
            <TodoForm  onSubmit={addTodo}/>
            <div className= 'all-todos'>
            <TodoDivs list={todos} Delete={handleDelete} 
            Completed={toggleComplete} Update={updatedTodos}/>
            </div>
        </div>

    )
}

export default TodoList;