import { useAtom } from "jotai";
import { tasksAtom } from "./atoms";

export const Profile = () => {
    const [tasks] = useAtom(tasksAtom);
    return (
        <div>
            Hello, user. You have {tasks.length} tasks open.
        </div>
    )
}