import React, { createContext, useEffect, useState } from "react";

const DataContext = createContext();
function DataProvider({ children }) {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const todoStore = JSON.parse(localStorage.getItem("todoStore"));
    if (todoStore) setTodos(todoStore);
  }, []);
  useEffect(() => {
    localStorage.setItem("todoStore", JSON.stringify(todos));
  }, [todos]);
  return (
    <div>
      <DataContext.Provider value={[todos, setTodos]}>
        {children}
      </DataContext.Provider>
    </div>
  );
}

export default DataProvider;
export { DataContext };
