import SearchBoxUI from "./SearchBoxUI";
import { v4 as uuidv4 } from 'uuid';
import { useContext } from "react";
import { AppContext } from "../AppContext";

export default function SearchBox() {
  const { tasks, setTasks, text, setText } = useContext(AppContext)

  const callbackChangeText = (e) => {
    setText({target: e.target, value:e.target.value})
  }

  const callbackAddText = () => {
    if ( text && text.value.trim() ){
      const auxTasks = [ ...tasks, { id:uuidv4(), text: text.value, checked: false } ]
      setTasks(auxTasks)
      setText('')
      text.target.value = ''
    }
  }

  return (
    <SearchBoxUI
      fnText={callbackChangeText}
      fnAdd={callbackAddText} />
  )
}