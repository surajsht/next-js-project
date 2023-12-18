"use client";

import { useState } from "react";
import { useMyContext } from "../context/Context";

const Form = () => {
  let [userValue, getUserValue] = useState("");

  let { todoList, setTodoList } = useMyContext();

  let getData = (e) => {
    e.preventDefault();

    if (!userValue) return;

    setTodoList([...todoList, userValue]);
    getUserValue("");
  };

  return (
    <div className="form-container" onSubmit={(e) => getData(e)}>
      <form action="">
        <input
          type="text"
          value={userValue}
          onChange={(e) => getUserValue(e.target.value)}
        />
        <button type="submit"> Add </button>
      </form>
    </div>
  );
};

export default Form;
