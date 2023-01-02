import LabelInfo from "./LabelInfo";
import SearchBox from "./SearchBox";
import Task from "./Task";
import { AppContext } from "./AppContext";
import { useContext } from "react";

import './App.css';

export default function AppUI() {
  const { tasks } = useContext(AppContext)

  return (
    <div className="App">
      <LabelInfo />
      <SearchBox />
      <div className='task-list'>
        { tasks.map(task => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            checked={task.checked} />
        ))}
      </div>
    </div>
  );
}