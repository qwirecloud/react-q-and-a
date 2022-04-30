import { AddTask } from './AddTask';
import { ListTasks } from './ListTasks';
import { Header } from './Header';

function App() {
  return (
    <div className='p-5'>
      <Header />
      <ListTasks />
      <AddTask />
    </div>
  );
}

export default App;
