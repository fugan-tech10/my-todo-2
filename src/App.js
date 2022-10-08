import { useState, createContext } from 'react';
import './App.css';
import { Completed } from './components/Completed';
import { Inputform } from './components/Inputform';
import { Title } from './components/Title';
import { TodoList } from './components/TodoList';

export const TodoContext = createContext({});
export const CompletedContext = createContext({});

const App =() => {
  const [taskList, setTaskList] = useState([]);
  //const [completedList, setCompletedList] = useState([]);
  return (
    <div className="body">
      <TodoContext.Provider value={[taskList, setTaskList]}>
      <CompletedContext.Provider value={[taskList, setTaskList]}>  
      <Title />
      <Inputform />
      <TodoList />
      <Completed />
      </CompletedContext.Provider>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
