import './TaskForm.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../features/tasksSlice';

const TaskForm = () => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const dispatch = useDispatch();

    const createTask = () => {
        let newTask = {
            name: name,
            desc: desc
        };
        dispatch(addTask(newTask))
    }

    return (
        <form>
            <h2>Add Task</h2>
            <input type='text' placeholder='Task name...' onChange={(e) => setName(e.target.value)} />
            <input type='text' placeholder='Task description...' onChange={(e) => setDesc(e.target.value)} />
            <button type='button' onClick={createTask}>Add</button>
        </form>
    )
}

export default TaskForm;