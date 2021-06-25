import React, {useState} from 'react';
import './App.css';


function TodoForm (props) {

    const [todo, setTodo] = useState(props.edit ? props.edit.value : '');


    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit({
            id: new Date().getTime(),
            text: todo,
            completed: false
        })

        setTodo('');
        
    }

    return (
        <div>
            <form>
                 {props.edit ?  
                (<>
                <input className='input' type='text' value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button className= 'submit-button' type='submit' onClick= {handleSubmit}> Update! </button>
                </>) :
                (<>
                    <input className='input' type='text' value={todo} onChange={(e) => setTodo(e.target.value)} />
                    <button className= 'submit-button' type='submit' onClick= {handleSubmit}> Add Todo </button>
                </>)} 
            </form>
        </div>

    )
}

export default TodoForm;