import { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const [count, setCount] = useState(0);

  const handleOnChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      setTodo([...todo, newTodo]);
      setNewTodo("");
    } else {
      console.log("Campo de tarea vacío");
    }
  };

  const handleDeleteTodo = (index) => {
    const updateTodos = todo.filter((todo, i) => i !== index);
    setTodo(updateTodos);
  };

  useEffect(() => {
    setCount(todo.length);
  }, [todo]);

  return (
    <div>
      <h1>Tareas</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={newTodo}
          placeholder="Añade una tarea..."
          onChange={handleOnChange}
        />
        <button>Add</button>
      </form>
      <div>
        {todo.map((todo, index) => (
          <h1 key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </h1>
        ))}
        <p>
          {count > 1
            ? `Tienes ${count} tareas pendientes`
            : `Tienes ${count} tarea pendiente`}
        </p>
      </div>
    </div>
  );
}

export default App;
