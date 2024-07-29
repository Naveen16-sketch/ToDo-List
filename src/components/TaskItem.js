import React, { useState } from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleUpdate = () => {
    const updatedTask = {
      ...task,
      title,
      description,
      lastUpdated: new Date(),
    };
    onUpdate(updatedTask);
    setIsEditing(false);
  };

  const toggleComplete = () => {
    const updatedTask = {
      ...task,
      completed: !task.completed,
      lastUpdated: new Date(),
    };
    onUpdate(updatedTask);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <button onClick={toggleComplete}>
            {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
          </button>
          <p>{task.description}</p>
          <p className="task-details">
            Last Updated: {task.lastUpdated.toLocaleString()}
          </p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TaskItem;
