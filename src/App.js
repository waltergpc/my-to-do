import './App.css';
import TodoList from './todos.js';
import TodoDetail from './Todo-Details.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact strict path ='/'>
          <TodoList />
        </Route>
        <Route exact strict path ='/:id'>
          <TodoDetail />
        </Route>
      </Router>
      
    </div>
  );
}

export default App;
