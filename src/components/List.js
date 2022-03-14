import React, { useContext } from "react";
import { DataContext } from "./DataProvider";
import ListItem from "./ListItem";

function List() {
  const [todos, setTodos] = useContext(DataContext);
  const swtichComplete = (id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.complete = !todo.complete;
      }
    });
    setTodos(newTodos);
  };
  const handleEditTodos = (editvalue, id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.name = editvalue;
      }
    });
    setTodos(newTodos);
  };
  return (
    <ul>
      {todos.map((todo, index) => (
        <ListItem
          key={index}
          todo={todo}
          id={index}
          ckeckComplete={swtichComplete}
          handleEditTodos={handleEditTodos}
        />
      ))}
    </ul>
  );
}

export default List;
