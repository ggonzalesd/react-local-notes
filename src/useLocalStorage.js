import { useState } from "react";

export default function useLocalStorage(itemName, default_){
  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem;
  if (!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(default_))
    parsedItem = []
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }

  const [ item, setItem ] = useState(parsedItem)

  const saveItem = (newItem) => {
    const stringifyItem = JSON.stringify(newItem)
    localStorage.setItem(itemName, stringifyItem)
    setItem(newItem)
  }

  return [ item, saveItem ]
}
