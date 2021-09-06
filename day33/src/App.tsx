import './App.css';
import Add from './Components/AddTodo';
import TodoList from './Components/TodoList';

function App() {
  return (
    <>
      <div className="container">
        <Add/>
        <TodoList/>
      </div>
    </>
  );
}

export default App;
