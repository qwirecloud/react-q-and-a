import { useAtom } from 'jotai'

import { tasksAtom } from './atoms';
import './App.css';

function App() {
  const [tasks, setTasks] = useAtom(tasksAtom)
  return (
    <div>
      <h1>Tachometer</h1>
      <p>Measure your task-completion velocity.</p>
      <ul>
        {tasks.map((task) => (
          <li key={task.key}>{task.title}</li>
        ))}
      </ul>
      <div>
        <form onSubmit={(event) => {
          event.preventDefault()
          const { taskTitleField } = event.target;
          console.log(taskTitleField.value)
          if (!taskTitleField.value) {
            return;
          }
          setTasks([...tasks, { key: Date.now(), title: taskTitleField.value }])
          taskTitleField.value = '';
        }}>
          <label>New Task:</label>
          <input name="taskTitleField" type="text" maxLength={30} />
          <button name="createTaskButton" type='submit'>Create</button>
        </form>
      </div>
    </div>
  );
}

export default App;
