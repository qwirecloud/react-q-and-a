import './App.css';
import { AddTask } from './AddTask';
import { ListTasks } from './ListTasks';
import { Header } from './Header';

function App() {
  return (
    <div>
      <Header />
      <ListTasks />
      <AddTask />
    </div>
  );
}

export default App;
