import React, { useState } from "react";

function ListItem({ todo, id, ckeckComplete, handleEditTodos }) {
  const [onEdit, setOnEdit] = useState(false);
  const [editValue, setEditValue] = useState(todo.name);

  const handleOnEdit = () => {
    setOnEdit(true);
  };
  const handleSave = (id) => {
    setOnEdit(false);
    if (editValue) {
      handleEditTodos(editValue, id);
    } else {
      setEditValue(todo.name);
    }
  };
  if (onEdit) {
    return (
      <li>
        <input
          type="text"
          id="editvalue"
          value={editValue}
          name={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
        <button onClick={() => handleSave(id)}>Save</button>
      </li>
    );
  } else {
    return (
      <li>
        <label htmlFor={id}>
          <input
            type="checkbox"
            id={id}
            checked={todo.complete}
            onChange={() => ckeckComplete(id)}
          />
          {todo.name}
        </label>
        <button disabled={todo.complete} onClick={handleOnEdit}>
          Edit
        </button>
      </li>
    );
  }
}

export default ListItem;
