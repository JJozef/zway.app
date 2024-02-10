import Editor from '@monaco-editor/react'

export default function CodeEditorCode({ value, setValue, ...props }) {
  return (
    <Editor
      className='[&>.monaco-editor]:h-[100%_!important] [&>.monaco-editor]:w-[100%_!important]'
      height='100%'
      theme='vs-dark'
      defaultLanguage={props.language || 'html'}
      defaultValue={value || ''}
      onChange={(e) => setValue(e || '', props.language)}
      onMount={() => null}
      editorDidMount={() => null}
      {...props}
    />
  )
}
