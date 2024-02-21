import { CSSIcon, HTMLIcon, JSIcon } from '@/components/ui/icons'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@/components/ui/resizable'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import CodeEditorSandbox from './code-with-monaco'

export default function CodeEditorBoxes({
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
    <ResizablePanelGroup direction='vertical' className='h-full'>
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction='horizontal'>
          <ResizablePanel defaultSize={50}>
            <section className='h-full w-full relative [&>.monaco-editor]:w-[100%_!important]'>
              <CodeEditorSandbox
                value={html}
                setValue={handleSetValue}
                language='html'
              />
              <div className='absolute bottom-2 right-2 h-6 z-20'>
                <TooltipProvider delayDuration={200} disableHoverableContent>
                  <Tooltip>
                    <TooltipTrigger className='cursor-default'>
                      <HTMLIcon className='text-red-400 hover:scale-105 transition-transform duration-200' />
                    </TooltipTrigger>
                    <TooltipContent side='left'>
                      <p>HTML</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </section>
          </ResizablePanel>
          <ResizableHandle
            className='w-[2px] bg-zinc-600 [&>div]:bg-zinc-500 [&>div]:border-zinc-400'
            withHandle
          />
          <ResizablePanel defaultSize={50}>
            <section className='h-full w-full relative'>
              <CodeEditorSandbox
                value={css}
                setValue={handleSetValue}
                language='css'
              />
              <div className='absolute bottom-2 right-2 h-6 z-20'>
                <TooltipProvider delayDuration={200} disableHoverableContent>
                  <Tooltip>
                    <TooltipTrigger className='cursor-default'>
                      <CSSIcon className='text-blue-400 hover:scale-105 transition-transform duration-200' />
                    </TooltipTrigger>
                    <TooltipContent side='left'>
                      <p>CSS</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </section>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle
        className='data-[panel-group-direction=vertical]:h-[2px] bg-zinc-600 [&>div]:bg-zinc-500 [&>div]:border-zinc-400'
        withHandle
      />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction='horizontal'>
          <ResizablePanel defaultSize={50}>
            <section className='h-full w-full relative'>
              <CodeEditorSandbox
                value={js}
                setValue={handleSetValue}
                language='javascript'
              />
              <div className='absolute bottom-2 right-2 h-6 z-20'>
                <TooltipProvider delayDuration={200} disableHoverableContent>
                  <Tooltip>
                    <TooltipTrigger className='cursor-default'>
                      <JSIcon className='text-yellow-400 hover:scale-105 transition-transform duration-200' />
                    </TooltipTrigger>
                    <TooltipContent side='left'>
                      <p>JavaScript</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </section>
          </ResizablePanel>
          <ResizableHandle
            className='w-[2px] bg-zinc-600 [&>div]:bg-zinc-500 [&>div]:border-zinc-400'
            withHandle
          />
          <ResizablePanel defaultSize={50}>
            <iframe
              className='h-full w-full outline-none resize-none bg-zinc-100'
              src={preview}
              title='Preview of the code'
            />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
