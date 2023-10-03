import './App.css';
import TaskForm from './Components/TaskForm/TaskForm';
import TaskList from './Components/TaskList/TaskList';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <TaskForm />
        <TaskList />
      </header>
    </div>
  );
}

export default App;
