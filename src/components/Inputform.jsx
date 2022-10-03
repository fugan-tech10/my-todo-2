import React, {useState, useContext} from 'react';
import { TodoContext } from '../App';

export const Inputform = () => {
    const [taskList, setTaskList] = useContext(TodoContext);
    const [inputText, setInputText] = useState("");
    

    const handleChange = (e) => {
        setInputText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTaskList([
            ...taskList,
            {
            key: inputText,
            id: inputText,
            text: inputText,
            immidiate: true,
            completed: false,
            }
        ]);   
        console.log(taskList);
        setInputText("");
 
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputText} />
        <button>ADD</button>
    </form>
    </>
  )
}
