import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { tasksAtom } from "./atoms";
import { Button } from "./Button";
import { Input } from "./Input";

const schema = z.object({
  taskTitle: z.string(),
});

export const AddTask = () => {
  const [tasks, setTasks] = useAtom(tasksAtom);

  const { register, handleSubmit, resetField } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit(({ taskTitle }) => {
        setTasks([...tasks, { key: Date.now(), title: taskTitle }]);
        resetField("taskTitle");
      })}
    >
      <div className="flex flex-col gap-2 bg-gray-200 text-white p-4 rounded-md drop-shadow-lg">
        <h2 className="text-lg text-gray-800">New Task</h2>
        <div className="flex gap-3">
          <Input
            fieldName="taskTitle"
            placeholder="Type your task here"
            register={register}
          />
          <Button type="submit">Create</Button>
        </div>
      </div>
    </form>
  );
};
