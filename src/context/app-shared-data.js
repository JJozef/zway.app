import { createContext, useState, useContext } from 'react'

const AppSharedDataContext = createContext()

export const useAppSharedDataContext = () => useContext(AppSharedDataContext)

export const AppSharedDataProvider = ({ children }) => {
  const [data, setData] = useState({
    urlBlob: '',
    url: '',
    html: '',
    css: '',
    javascript: ''
  })

  const setValues = ({ urlBlob, url, html, css, javascript }) => {
    if (url?.startsWith('||')) return clearData()

    updateData({ url, urlBlob, html, css, javascript })
  }

  const clearData = () => {
    setData({
      urlBlob: '',
      url: '',
      html: '',
      css: '',
      javascript: ''
    })
  }

  const updateData = ({ url, urlBlob, html, css, javascript }) => {
    setData((prevSharedData) => ({
      ...prevSharedData,
      url,
      urlBlob,
      html,
      css,
      javascript
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
