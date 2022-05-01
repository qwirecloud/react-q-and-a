import { useAtom } from "jotai";

import { tasksAtom } from "./atoms";
import { Task } from "./Task";

export const ListTasks = () => {
  const [tasks] = useAtom(tasksAtom);
  return (
    <ul className="flex flex-col gap-4">
      {tasks.map((task) => (
        <li key={task.key}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
