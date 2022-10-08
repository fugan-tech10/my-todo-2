import React, { useContext } from "react";
import { useState } from "react";
import { TodoContext } from "../App";
import { CompletedContext } from "../App";

export const TodoList = () => {
  const [taskList, setTaskList] = useContext(TodoContext);
  // const [completedList, setCompletedList] = useContext(CompletedContext);
  const onClickImmidiate = (id, todo) => {
    setTaskList(
      taskList.map((todo) => {
        if (id === todo.id) {
          return {
            ...todo,
            immidiate: true,
          };
        }
        return todo;
      })
    );
    console.log(taskList);
  };
  const onClickLater = (id) => {
    setTaskList(
      taskList.map((todo) => {
        if (id === todo.id) {
          return {
            ...todo,
            immidiate: false,
          };
        }
        return todo;
      })
    );
    console.log(taskList);
  };

  const onClickComplete = (id) => {
    setTaskList(
      taskList.map((todo) => {
        if (id === todo.id) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      })
    );
  };

  const onClickDelete = (id) => {
    setTaskList(taskList.filter((todo) => todo.id !== id));
  };

  const currentList = taskList.filter((todo) => todo.completed === false);

  return (
    <>
      <h2>current task</h2>
      <table>
        <thead>
          <tr>
            <td>No.</td>
            <td>やること</td>
          </tr>
        </thead>
        <tbody>
          {currentList.map((todo, index) => (
            <tr key={todo.text}>
              <td>{index}</td>
              <td>{todo.text}</td>
              <td>
                <button
                  className={`${todo.immidiate ? "immidiate" : ""}`}
                  onClick={() => onClickImmidiate(todo.id, todo)}
                >
                  すぐ
                </button>
              </td>
              <td>
                <button
                  className={`${todo.immidiate ? "" : "later"}`}
                  onClick={() => onClickLater(todo.id)}
                >
                  あとで
                </button>
              </td>
              <td>
                <button
                  className={`${todo.completed ? "completed" : ""}`}
                  onClick={() => onClickComplete(todo.id)}
                >
                  完了
                </button>
              </td>
              <td>
                <button onClick={() => onClickDelete(todo.id)}>削除</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Completed completedList={completedList} setCompletedList={setCompletedList}/> */}
    </>
  );
};
