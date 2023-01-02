import './Task.css'
import { AiOutlineCheck } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'

export default function TaskUI({ text, checked, fnCheck, fnRemove }) {
  return (
    <div className={`task ${checked?'checked':''}`}>
      <p>{text}</p>
      <div>
        <button onClick={fnCheck}><span><AiOutlineCheck /></span></button>
        <button onClick={fnRemove}><span><AiOutlineClose /></span></button>
      </div>
    </div>
  )
}