import TodoForm from './Todo-form'; 
import {useState} from 'react';

function TodoDivs ({ list, Delete, Completed, Update }) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        Update(edit.id, value);
        setEdit({
            id: null,
            value:''
        })
    };

  
   

    return list.map(todo => 
        <div className='flex-items' key={todo.id}>
            {edit.id === todo.id ? 

            (<TodoForm  onSubmit={submitUpdate} edit={edit} />) : 

            (<div>{todo.text}
            <p className='delete-button' 
            onClick={() => Delete(todo.id)}> borrame</p>
            <input className='completed' type='checkbox' onChange={() => Completed(todo.id)} checked={todo.completed} />
            <p className='edit-button' onClick={() => setEdit({id: todo.id, value: todo.text})}>Editame</p></div>)}
           
        
        </div>
        )
    

    
}

export default TodoDivs;