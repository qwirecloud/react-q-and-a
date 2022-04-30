import { useAtom } from "jotai";
import { tasksAtom } from "./atoms";
import { Button } from "./Button";

export const AddTask = () => {
  const [tasks, setTasks] = useAtom(tasksAtom);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const { taskTitleField } = event.target;
        console.log(taskTitleField.value);
        if (!taskTitleField.value) {
          return;
        }
        setTasks([...tasks, { key: Date.now(), title: taskTitleField.value }]);
        taskTitleField.value = "";
      }}
    >
      <div>
        <label>New Task:</label>
        <input name="taskTitleField" type="text" maxLength={30} />
        <Button description="Create" type="submit" />
      </div>
    </form>
  );
};
