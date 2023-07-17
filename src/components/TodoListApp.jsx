import React, { useState } from 'react';

const TodoListApp = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const handleTaskInputChange = (event) => {
        setTaskInput(event.target.value);
    };

    const handleAddTask = (event) => {
        event.preventDefault();
        if (taskInput.trim() !== '') {
            setTasks([...tasks, taskInput]);
            setTaskInput('');
        }
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <form onSubmit={handleAddTask}>
                <input
                    type="text"
                    value={taskInput}
                    onChange={handleTaskInputChange}
                    placeholder="Enter a task"
                />
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => handleDeleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoListApp;
