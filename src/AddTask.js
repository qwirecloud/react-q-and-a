import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "./Button";
import { Input } from "./Input";
import { useInsertTask } from "./api/api.hooks";

const schema = z.object({
  title: z.string(),
  effort: z.any(),
});

export const AddTask = () => {
  const insertTask = useInsertTask();

  const { register, handleSubmit, resetField } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit(({ title, effort }) => {
        insertTask.mutate(
          { title, effort },
          {
            onSuccess: () => {
              resetField("title");
              resetField("effort");
            },
          }
        );
      })}
    >
      <div className="flex flex-col gap-2 bg-gray-200 text-white p-4 rounded-md drop-shadow-lg">
        <h2 className="text-lg text-gray-800">New Task</h2>
        <div className="flex gap-3">
          <Input
            fieldName="title"
            placeholder="Type your task here"
            register={register}
          />
          <Input
            fieldName="effort"
            placeholder="Type the estimated effort"
            register={register}
            type="number"
          />
          <Button type="submit">Create</Button>
        </div>
      </div>
    </form>
  );
};
