// src/components/TaskItem.js
import React from 'react';

function TaskItem({ task, onDeleteTask, onToggleTaskCompletion }) {
    return (
        <div className={`task-item ${task.completed ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleTaskCompletion(task.id)}
            />
            <span>{task.text}</span>
            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </div>
    );
}

export default TaskItem;
