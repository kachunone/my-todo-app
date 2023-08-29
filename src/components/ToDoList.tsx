import { useState } from "react";

export function ToDoList() {
  const todos: string[] = ["Buy groceries", "Clean the house", "Walk the dog"];

  //An empty string
  // const todos: string[] = [];

  const [selectedItems, setselectedItems] = useState<number[]>([]);

  return (
    <>
      <ul className="list-group">
        <li className="list-group-item disabled">To Do List</li>
        {todos.map((item, index) => {
          const selected = selectedItems.includes(index);
          return (
            <li
              key={index}
              className={`list-group-item ${selected ? "active" : ""}`}
              onClick={() => {
                const updatedSelectedItems = [...selectedItems];
                updatedSelectedItems.push(index);
                setselectedItems(updatedSelectedItems);
              }}
            >
              {item}
            </li>
          );
        })}
        {todos.length === 0 && (
          <li className="list-group-item list-group-item-primary">
            There is no task to do.
          </li>
        )}
      </ul>
    </>
  );
}
