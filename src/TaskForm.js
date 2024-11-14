import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
    const [taskText, setTaskText] = useState('');

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        onAddTask(taskText);  // Pass the task text to the parent component
        setTaskText('');       // Clear the input field after submitting
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                placeholder="Enter a new task..."
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}  // Controlled input
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default TaskForm;

