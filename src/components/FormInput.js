import React, { useContext, useState } from "react";
import { DataContext } from "./DataProvider";

function FormInput() {
  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState("");
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { name: todoName, complete: false }]);
    setTodoName("");
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={addTodo}>
        <input
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          type="text"
          name="todos"
          id="todos"
          required
          placeholder="write"
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
}

export default FormInput;
