import { useTasksCount } from "./api/api.hooks";

export const Profile = () => {
  const { data: tasksCount } = useTasksCount();
  return (
    <div className="flex flex-col justify-end">
      <p>Hello, user.</p>
      <small>You have {tasksCount} tasks open.</small>
    </div>
  );
};
