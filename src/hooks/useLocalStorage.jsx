import { useState } from "react";

export function useLocalStorage(keyStorage) {

  let userLocalStorage = JSON.parse(localStorage.getItem(keyStorage));

  if (userLocalStorage == null) {
    localStorage.setItem(keyStorage, JSON.stringify(null));
  }
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem(keyStorage))
  )
  return ({data, setData})
}
