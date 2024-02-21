import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CSSIcon, HTMLIcon, JSIcon, Laptop2Icon } from '@/components/ui/icons'
import CodeEditorSandbox from './code-with-monaco'

export default function CodeEditorTabs({
  html,
  css,
  js,
  preview,
  handleInputChange
}) {
  const handleSetValue = (value, target) => {
    return handleInputChange(value, target)
  }

  return (
    <Tabs defaultValue='html' className='flex flex-col grow'>
      <TabsList className='w-full justify-start rounded-none border-b border-b-zinc-950'>
        <TabsTrigger value='html' className='flex items-center gap-1 group'>
          <HTMLIcon className='w-4 h-4 min-w-4 group-data-[state=active]:text-red-400 group-hover:text-red-400' />
          HTML
        </TabsTrigger>
        <TabsTrigger value='css' className='flex items-center gap-1 group'>
          <CSSIcon className='w-4 h-4 min-w-4 group-data-[state=active]:text-blue-400 group-hover:text-blue-400' />
          CSS
        </TabsTrigger>
        <TabsTrigger
          value='javascript'
          className='flex items-center gap-1 group'
        >
          <JSIcon className='w-4 h-4 min-w-4 group-data-[state=active]:text-yellow-400 group-hover:text-yellow-400' />
          JavaScript
        </TabsTrigger>
        <TabsTrigger value='preview' className='flex items-center gap-1 group'>
          <Laptop2Icon className='w-4 h-4 min-w-4 group-data-[state=active]:text-white group-hover:text-white' />
          Preview
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value='html'
        className='grow m-0 h-full w-full [&>section_>_div_>_.monaco-editor]:w-[100%_!important] [&>section_>_div_>_.monaco-editor]:h-[100%_!important]'
      >
        <CodeEditorSandbox
          language='html'
          setValue={handleSetValue}
          value={html}
        />
      </TabsContent>
      <TabsContent
        value='css'
        className='grow m-0 h-full w-full [&>section_>_div_>_.monaco-editor]:w-[100%_!important] [&>section_>_div_>_.monaco-editor]:h-[100%_!important]'
      >
        <CodeEditorSandbox language='css' setValue={handleSetValue} value={css} />
      </TabsContent>
      <TabsContent
        value='javascript'
        className='grow m-0 h-full w-full [&>section_>_div_>_.monaco-editor]:w-[100%_!important] [&>section_>_div_>_.monaco-editor]:h-[100%_!important]'
      >
        <CodeEditorSandbox
          language='javascript'
          setValue={handleSetValue}
          value={js}
        />
      </TabsContent>
      <TabsContent
        value='preview'
        className='grow m-0 h-full w-full'
      >
        <iframe
          className='h-full w-full outline-none resize-none bg-zinc-100'
          src={preview}
          title='Preview of the code'
        />
      </TabsContent>
    </Tabs>
  )
}
