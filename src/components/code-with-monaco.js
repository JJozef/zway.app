import { useState, useEffect } from 'react'
import { useEditorContext } from '@/context/editor-configs'
import { DEFAULT_EDITOR_STATE, EDITOR_OPTIONS } from '@/lib/contants'
import { emmetHTML } from 'emmet-monaco-es'
import { Ring } from '@uiball/loaders'
import Editor from '@monaco-editor/react'

export default function CodeEditorSandbox({
  value,
  setValue,
  language,
  ...props
}) {
  const [options, setOptions] = useState(DEFAULT_EDITOR_STATE)
  const { editorState } = useEditorContext()

  useEffect(() => {
    setOptions((prevOptions) => {
      const newOptions = { ...DEFAULT_EDITOR_STATE, ...prevOptions }

      for (const key of EDITOR_OPTIONS) {
        if (key in editorState) {
          newOptions[key] = editorState[key]
        }
      }

      if (typeof editorState.minimap === 'boolean') {
        newOptions.minimap = {
          enabled: editorState.minimap
        }
      }

      return newOptions
    })
  }, [editorState])

  return (
    <Editor
      defaultLanguage={language}
      defaultValue={value || ''}
      onChange={(newValue) => setValue(newValue || '', language)}
      options={options}
      loading={<Ring size={30} speed={1} color='currentColor' />}
      onMount={({ monaco }) => {
        emmetHTML(monaco)
      }}
      {...options}
      {...props}
    />
  )
}
