"use client";

import { createContext, useContext, useState } from "react";

const MyContext = createContext();

const Context = ({ children }) => {
  let [todoList, setTodoList] = useState([]);

  let contextValue = { todoList, setTodoList };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

const useMyContext = () => {
  const context = useContext(MyContext);
  return context;
};

export default Context;
export { useMyContext };
