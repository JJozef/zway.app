import { createContext, useState, useContext } from 'react'

const AppSharedDataContext = createContext()

export const useAppSharedDataContext = () => useContext(AppSharedDataContext)

export const AppSharedDataProvider = ({ children }) => {
  const [data, setData] = useState({
    urlBlob: '',
    url: ''
  })

  const setValues = ({ urlBlob, url }) => {
    if (url?.startsWith('||')) return clearData()

    updateData({ url, urlBlob })
  }

  const clearData = () => {
    setData({
      urlBlob: '',
      url: ''
    })
  }

  const updateData = ({ url, urlBlob }) => {
    setData((prevSharedData) => ({
      ...prevSharedData,
      url,
      urlBlob
    }))
  }

  return (
    <AppSharedDataContext.Provider
      value={{ sharedData: data, setSharedData: setValues }}
    >
      {children}
    </AppSharedDataContext.Provider>
  )
}

export default AppSharedDataContext
