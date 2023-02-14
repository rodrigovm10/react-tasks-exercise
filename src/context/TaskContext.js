import React, { createContext, useState, useEffect } from 'react';
import { tasks as data } from '../data/tasks';
//Nombre del contexto
export const TaskContext = createContext();
//Componente que englobara todo
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  /*Función para crear tareas se le pasa como parámetro un objeto llamado task
	dentro de la función encontramos el método setTasks, donde se le hace una copia
	con el spreed operator, siendo los datos a agregar el titulo de la tarea, 
	id y una descripción*/
  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }
  useEffect(() => {
    setTasks(data);
  });

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  //Se crea el componente
  return (
    <TaskContext.Provider value={{ tasks, deleteTask, createTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}
