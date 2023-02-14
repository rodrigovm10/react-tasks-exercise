import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskForm({ createTask }) {
  /*Se inicializan dos propiedades string mediante el useState, una para el
	título y otro para la descripción */
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const valor = useContext(TaskContext);
  console.log(valor);
  /*Función de onSubmit, donde evitamos el default del botón y además llamamos 
	a la función createTask, pasandole como parametro el title y description 
	creados en el useState*/
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle('');
    setDescription('');
  };
  /*En el return añadimos una etiqueta form con el evento de onSubmit y la 
	función pasada por argumento será el handleSubmit.
	Encontramos un input y un textarea, donde se le escribira la tarea y la 
	descripción respectivamente. En un evento onChange se le asignara el valor
	que se le escriba, y se guardara en las variables de title y description
	gracias a los métodos set de cada uno.  */
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escrite tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea
        placeholder="Escribe la descripción de la tarea"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
