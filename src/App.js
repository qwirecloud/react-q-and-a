import './App.css';
import { AddTask } from './AddTask';
import { ListTasks } from './ListTasks';

function App() {
  return (
    <div>
      <h1>Tachometer</h1>
      <p>Measure your task-completion velocity.</p>
      <ListTasks />
      <AddTask />
    </div>
  );
}

export default App;
