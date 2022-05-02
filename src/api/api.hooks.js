import { useMutation, useQuery, useQueryClient } from "react-query";
import { insertTask, getTasks } from "./api.requests";

export const useTasksQuery = () => {
  return useQuery(["tasks"], async () => {
    const { data } = await getTasks();
    return data;
  });
};

export const useInsertTask = () => {
  const queryClient = useQueryClient();
  return useMutation((task) => insertTask(task), {
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });
};
