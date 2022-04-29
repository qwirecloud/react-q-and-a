import { useAtom } from 'jotai'

import { tasksAtom } from './atoms';

export const ListTasks = () => {
    const [tasks] = useAtom(tasksAtom);
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.key}>{task.title}</li>
            ))}
        </ul>
    )
}