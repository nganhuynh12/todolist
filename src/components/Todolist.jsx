import { useState } from "react";

function Todolist() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodoIndex, setCurrentTodoIndex] = useState(null);

  const handleChange = (e) => setTodo(e.target.value);

  const handleClick = () => {
    if (isEditing) {
      const updatedTodos = todos.map((item, index) =>
        index === currentTodoIndex ? todo : item
      );
      setTodos(updatedTodos);
      setIsEditing(false);
      setCurrentTodoIndex(null);
    } else {
      setTodos((prevTodos) => [...prevTodos, todo]);
    }
    setTodo("");
  };

  const handleEdit = (index) => {
    setIsEditing(true);
    setCurrentTodoIndex(index);
    setTodo(todos[index]);
  };

  const handleDelete = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h3 className="text-2xl font-bold mb-4 text-center">TODO LIST</h3>
        <input
          value={todo}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Add a new task"
        />
        <button
          onClick={handleClick}
          className="w-full bg-blue-500 text-white p-2 rounded mb-4 hover:bg-blue-600"
        >
          {isEditing ? "Update" : "Add"}
        </button>
        <ul className="list-disc pl-5">
          {todos.map((todoItem, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              {todoItem}
              <div>
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-yellow-400 text-white p-1 rounded mr-2 hover:bg-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white p-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todolist;
