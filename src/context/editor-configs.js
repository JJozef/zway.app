'use client'

import { DEFAULT_EDITOR_STORAGE_STATE } from '@/lib/contants'
import { createContext, useContext, useState, useEffect } from 'react'

const EditorContext = createContext()

export const useEditorContext = () => useContext(EditorContext)

export const EditorProvider = ({ children }) => {
  const verifyLocalStorageState = () => {
    let localStorageState = DEFAULT_EDITOR_STORAGE_STATE

    if (typeof window !== 'undefined') {
      const localStorageData = localStorage.getItem('editor-config')
      if (localStorageData) {
        try {
          localStorageState = JSON.parse(localStorageData)
        } catch (error) {
          console.error('Error parsing localStorage data:', error)

          localStorageState = DEFAULT_EDITOR_STORAGE_STATE

          localStorage.setItem(
            'editor-config',
            JSON.stringify(DEFAULT_EDITOR_STORAGE_STATE)
          )
        }
      }
    }

    for (const key in DEFAULT_EDITOR_STORAGE_STATE) {
      if (
        !(key in localStorageState) ||
        localStorageState[key] === null ||
        localStorageState[key] === undefined ||
        localStorageState[key] === ''
      ) {
        localStorageState[key] = DEFAULT_EDITOR_STORAGE_STATE[key]
      }
    }

    return localStorageState
  }

  const [editorState, setEditorState] = useState(() => {
    if (typeof window !== 'undefined') {
      return verifyLocalStorageState()
    }
    return DEFAULT_EDITOR_STORAGE_STATE
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('editor-config', JSON.stringify(editorState))
    }
  }, [editorState])

  const updateEditorState = (newState) => {
    setEditorState((prevState) => {
      return { ...prevState, ...newState }
    })
  }

  return (
    <EditorContext.Provider
      value={{ editorState, setEditorState: updateEditorState }}
    >
      {children}
    </EditorContext.Provider>
  )
}
