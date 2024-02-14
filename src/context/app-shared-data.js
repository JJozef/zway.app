import { createContext, useState, useContext } from 'react'

const AppSharedDataContext = createContext()

export const useAppSharedDataContext = () => useContext(AppSharedDataContext)

export const AppSharedDataProvider = ({ children }) => {
  const [sharedData, setSharedData] = useState({
    urlBlob: '',
    url: ''
  })

  return (
    <AppSharedDataContext.Provider value={{ sharedData, setSharedData }}>
      {children}
    </AppSharedDataContext.Provider>
  )
}

export default AppSharedDataContext
