import { tasks as data } from './data/tasks';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import React, { useState, useEffect } from 'react';

function App() {
  /*Creamos un arreglo llamado tasks, el cual se le asignara el valor de tasks o
	data que este archivo tiene como valor un arreglo de objetos, con distintas
	propiedades.
	Una vez inicializa la aplicación el useEffect incializara este arreglo con
	los datos dados, gracias al método setTasks*/
  useEffect(() => {
    setTasks(data);
  }, []);
  /*En el return utilizamos el componente de TaskFrom pasandole como props
	el método createTasks. 
	En el componente de TaskList le pasamos como props las tasks */
  return (
    <>
      <TaskForm createTask={createTasks} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  );
}

export default App;
