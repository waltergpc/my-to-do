import TodoForm from './Todo-form'; 
import {useState} from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { AiTwotoneEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';


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

            (<div >{todo.text}  <br></br>
                <div className= 'icon-display'>
            <RiDeleteBin6Fill className='delete-button' onClick={() => Delete(todo.id)} /> 
            <label>Completed?</label>
            <input className='completed' type='checkbox' onChange={() => Completed(todo.id)} checked={todo.completed} />
            <AiTwotoneEdit className='edit-button' onClick={() => setEdit({id: todo.id, value: todo.text})} />
            <div> <Link  
            to={{
                pathname: `/${todo.text}`,
                state: {
                    info: todo
                }}}> 
                Details
                </Link>
            </div>
            </div>
            </div>)}
           
        
        </div>
        )
    

    
}

export default TodoDivs;