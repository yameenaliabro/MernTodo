import './App.css';
import {Routes,Route} from "react-router-dom"
import TodoList from './Component/TodoList/TodoList';
import Signup from './Component/Auth/Signup/Signup';
import Login from './Component/Auth/Login/Login';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Todolist'element={<TodoList/>}/>
        </Routes>
    </div>
  );
}
export default App
