import './LabelInfo.css'
import { AppContext } from './../AppContext'
import { useContext } from 'react'

export default function LabelInfoUI() {
  const { tasks } = useContext(AppContext)
  
  return (
    <h2 className='label-info-text'>
        Total de tareas: { tasks.filter(task => task.checked).length } / {tasks.length }
    </h2>
  )
} 