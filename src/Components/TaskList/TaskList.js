import './TaskList.css';
import Task from './Task/Task';
import { useSelector } from 'react-redux';

const TaskList = () => {
    const tasks = useSelector((store) => store.tasks.value);

    return (
        <main>
            {
                tasks.length > 0 ?
                    tasks.map((task, index) => (
                        <Task task={task} key={index} />
                    ))
                : ''
            }
        </main>
    )
}

export default TaskList;