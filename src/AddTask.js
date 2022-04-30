import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { tasksAtom } from "./atoms";
import { Button } from "./Button";

const schema = z.object({
  taskTitle: z.string(),
});

export const AddTask = () => {
  const [tasks, setTasks] = useAtom(tasksAtom);

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit(({ taskTitle }) => {
        setTasks([...tasks, { key: Date.now(), title: taskTitle }]);
      })}
    >
      <div>
        <label>New Task:</label>
        <input {...register("taskTitle")} />
        <Button description="Create" type="submit" />
      </div>
    </form>
  );
};
