import { useContext } from "react"
import { AppContext } from "../AppContext"
import TaskUI from "./TaskUI"

export default function Task({ id, text, checked }) {
  const { tasks, setTasks } = useContext(AppContext)

  const callbackChecked = () => {
    const ts = tasks.map(task => {
      if(task.id === id) {
        return {...task, checked: !task.checked}
      } else {
        return task
      }
    })
    setTasks(ts)
  }

  const callbackRemove = () => {
    const t = tasks.filter(task => task.id !== id)
    setTasks( t )
  }

  return (
    <TaskUI
      text={text}
      checked={checked}
      fnCheck={callbackChecked}
      fnRemove={callbackRemove} />
  )
}