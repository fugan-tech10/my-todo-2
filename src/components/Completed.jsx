import { useContext, useState } from "react";
import { TodoContext } from "../App";
import { CompletedContext } from "../App";

export const Completed = () => {
  const [taskList, setTaskList] = useContext(TodoContext);
  //const [completedList, setCompletedList] = useContext(CompletedContext);

  const onClickDelete = (id) => {
    setTaskList(taskList.filter((todo) => todo.id !== id));
  };

  const completedList = taskList.filter((todo) => todo.completed === true)
 

  return (
    <>
      <h2>Completed!</h2>
      <table>
        <tbody>
          {completedList.map((todo, index) => (
              <tr key={todo.text}>
                <td>{index}</td>
                <td>{todo.text}</td>
                <td>
                  <button onClick={() => onClickDelete(todo.id)}>削除</button>
                </td>
              </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
