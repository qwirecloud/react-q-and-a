import { useAtom } from "jotai";

import { tasksAtom } from "./atoms";
import { Task } from "./Task";

export const ListTasks = () => {
  const [tasks, setTasks] = useAtom(tasksAtom);

  const deleteTask = (key) => {
    setTasks(tasks.filter((task) => task.key !== key));
  };

  return (
    <ul className="flex flex-col gap-4">
      {tasks.map((task) => (
        <li key={task.key}>
          <Task task={task} deleteTask={deleteTask} />
        </li>
      ))}
    </ul>
  );
};
