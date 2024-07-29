import React, { useState } from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';
import initialTasks from '../data/tasks.json';

const TaskList = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const addTask = () => {
    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      description: newTaskDescription,
      completed: false,
      lastUpdated: new Date(),
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
    setNewTaskDescription('');
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="new-task-form">
        <input
          type="text"
          placeholder="Task title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Task description"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdate={updateTask}
          onDelete={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
