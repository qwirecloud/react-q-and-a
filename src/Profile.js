import { useAtom } from "jotai";
import { tasksAtom } from "./atoms";

export const Profile = () => {
  const [tasks] = useAtom(tasksAtom);
  return (
    <div className="flex flex-col justify-end">
      <p>Hello, user.</p>
      <small>You have {tasks.length} tasks open.</small>
    </div>
  );
};
