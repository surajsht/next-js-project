"use client";

import { useMyContext } from "../context/Context";

const Ui = () => {
  let { todoList, setTodoList } = useMyContext();

  let filterData = (idx) => {
    let newData = todoList.filter((item, itemIdx) => {
      return itemIdx !== idx;
    });

    setTodoList(newData);
  };

  return (
    <>
      {todoList.length > 0 && (
        <div className="todo-container">
          {todoList.map((item, itemIdx) => {
            return (
              <div className="todo-item" key={itemIdx}>
                <span>{item}</span>
                <button className="delete" onClick={() => filterData(itemIdx)}>
                  &#10006;
                </button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Ui;
