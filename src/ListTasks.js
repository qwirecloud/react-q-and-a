import { useTasksQuery } from "./api/api.hooks";
import { Task } from "./Task";

export const ListTasks = () => {
  const { data: tasks } = useTasksQuery();

  const deleteTask = () => {
    // setTasks(tasks.filter((task) => task.key !== key));
  };

  return (
    <ul className="flex flex-col gap-4">
      {tasks?.map((task) => (
        <li key={task.key}>
          <Task task={task} deleteTask={deleteTask} />
        </li>
      ))}
    </ul>
  );
};
