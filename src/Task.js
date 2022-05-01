export const Task = ({ task }) => {
  return (
    <div className="bg-gray-500 text-white p-4 rounded-md drop-shadow-lg">
      <span className="block text-sm text-gray-800">Task Description</span>
      {task.title}
    </div>
  );
};
