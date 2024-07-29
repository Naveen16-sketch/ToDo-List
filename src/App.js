import React from 'react';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
      </header>
      <main className="App-main">
        <TaskList />
      </main>
    </div>
  );
};

export default App;
