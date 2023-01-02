import { createContext, useState } from "react"
import useLocalStorage from "./useLocalStorage"

const AppContext = createContext()

function AppProvider({ children }) {

  const [ tasks, setTasks ] = useLocalStorage('notesData', [])
  const [ text, setText ] = useState(null)

  return (
    <AppContext.Provider value={{
      tasks, setTasks,
      text, setText
    }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }