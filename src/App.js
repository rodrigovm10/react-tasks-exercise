import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import React from 'react';
function App() {
  /*En el return utilizamos el componente de TaskFrom pasandole como props
	el método createTasks. 
	En el componente de TaskList le pasamos como props las tasks */
  return (
    <>
      <TaskForm />
      <TaskList />
    </>
  );
}

export default App;
