//import React, { useState } from 'react';
//import TodoList from './todos';
import { Link, useLocation } from 'react-router-dom';



const TodoDetail = (props)  => {

const location = useLocation();
const {info} = location.state;

    

   const showList = () => {
       console.log(info);
   }

    return (
        <div className='detail-div'>
            <h1>Hello </h1>
            <div> These are the details of task {info.text}; right now the task is 
            {info.completed === false ? (' not completed') : (' completed')}; the id of the task is  
             {info.id}</div>
            <div><Link to='/'>Back</Link></div>
            <button onClick= {showList}></button>
        </div>

    )
}

export default TodoDetail;