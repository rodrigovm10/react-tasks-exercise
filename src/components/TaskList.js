import TaskCard from './TaskCard';
import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
function TaskList() {
  const { tasks } = useContext(TaskContext);
  /*Con el props pasado por argumento en este caso es tasks
	comprobamos si su tamaño o sea si no existen tareas, 
	retornara el H1 con el mensaje correspondiente */
  if (tasks.length === 0) {
    return <h1>No hay tareas </h1>;
  }
  /*En caso de que no se haya cumplido el if anterior
	retornaremos un div que contendrá las tasks con el método map,
	el cual tiene una función que tiene como parametro un task, y 
	llamaremos al componente TaskCard, pasandole como props, la key
	(siendo esta el id de la task) y la task en general, siendo toda la task */
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
