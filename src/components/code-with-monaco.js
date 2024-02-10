import Editor from '@monaco-editor/react'

export default function CodeEditorCode({ value, setValue, ...props }) {
  return (
    // h-[100%_!important] w-[100%_!important] [&>.overflow-guard]:h-[100%_!important] [&>.overflow-guard]:w-[100%_!important] [&>.overflow-guard_>_.margin]:h-[100%_!important] [&>.overflow-guard_>_.monaco-scrollable-element_>_.lines-content]:w-[calc(100%_-_64px)_!important] [&>.overflow-guard_>_.monaco-scrollable-element_>_.lines-content]:h-[100%_!important] [&>.overflow-guard_>_.monaco-scrollable-element]:w-[calc(100%_-_64px)_!important] [&>.overflow-guard_>_.monaco-scrollable-element]:h-[100%_!important] [&>.overflow-guard_>_.monaco-scrollable-element_>_.lines-content_>_.view-lines]:w-[100%_!important] [&>.overflow-guard_>_.monaco-scrollable-element_>_.lines-content_>_.view-lines]:h-[100%_!important] [&>.overflow-guard_>_.minimap]:left-[auto_!important] [&>.overflow-guard_>_.minimap]:right-[0_!important]
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
    // <MonacoEditor
    //   className=''
    //   language='html'
    //   theme='vs-dark'
    //   value={value || ''}
    //   options={{ selectOnLineNumbers: true }}
    //   onChange={(e) => setValue(e, props.language)}
    //   editorDidMount={() => null}
    //   {...props}
    // />
  )
}
