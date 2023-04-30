import { createContext, useContext, useState } from 'react'

const StateContext = createContext()

const initialState = {
  user: null,
  token: null,
  isAuth: false,
  isLoading: false,
  error: null
}

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true)
  const [isClicked, setIsClicked] = useState(initialState)

  const handleClick = (clicked) =>
    setIsClicked({
      ...initialState,
      [clicked]: true
    })
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useGlobalContext = () => useContext(StateContext)
