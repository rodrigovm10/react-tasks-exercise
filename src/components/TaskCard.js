import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  /*Nos retorna un H1 y un P dentro de un DIV, esto con el titulo de la task
	y la descripción */
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </div>
  );
}

export default TaskCard;
