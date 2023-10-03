import './Task.css';

const Task = ({task}) => {
    return (
        <div className='task'>
            <h3>{task.name}</h3>
            <p>{task.desc}</p>
        </div>
    )
}

export default Task;