import {
  ArrowUpRightSquareIcon,
  BlocksIcon,
  CopyIcon,
  DownloadIcon,
  FileCode2Icon,
  SettingsIcon,
  TerminalIcon
} from '@/components/ui/icons'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

export default function Aside() {
  return (
    <aside className='h-full w-20 bg-neutral-900 text-white bg-border flex flex-col justify-between'>
      <header>
        <TooltipProvider delayDuration={100} disableHoverableContent>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="flex justify-center items-center w-full p-4 relative hover:before:h-full hover:before:bg-white hover:before:w-[4px] hover:before:content-[''] hover:before:absolute hover:before:top-0 hover:before:left-0 hover:before:right-0 hover:before:z-10 hover:before:border-gray-300">
                <FileCode2Icon className='w-8 h-8 min-w-8' />
              </button>
            </TooltipTrigger>
            <TooltipContent side='left'>
              <p className='text-base'>Editor</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={100} disableHoverableContent>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="flex justify-center items-center w-full p-4 relative hover:before:h-full hover:before:bg-white hover:before:w-[4px] hover:before:content-[''] hover:before:absolute hover:before:top-0 hover:before:left-0 hover:before:right-0 hover:before:z-10 hover:before:border-gray-300">
                <BlocksIcon className='w-8 h-8 min-w-8' />
              </button>
            </TooltipTrigger>
            <TooltipContent side='left'>
              <p className='text-base'>Dependencies</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={100} disableHoverableContent>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="flex justify-center items-center w-full p-4 relative hover:before:h-full hover:before:bg-white hover:before:w-[4px] hover:before:content-[''] hover:before:absolute hover:before:top-0 hover:before:left-0 hover:before:right-0 hover:before:z-10 hover:before:border-gray-300">
                <TerminalIcon className='w-8 h-8 min-w-8' />
              </button>
            </TooltipTrigger>
            <TooltipContent side='left'>
              <p className='text-base'>Terminal</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={100} disableHoverableContent>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="flex justify-center items-center w-full p-4 relative hover:before:h-full hover:before:bg-white hover:before:w-[4px] hover:before:content-[''] hover:before:absolute hover:before:top-0 hover:before:left-0 hover:before:right-0 hover:before:z-10 hover:before:border-gray-300">
                <DownloadIcon className='w-8 h-8 min-w-8' />
              </button>
            </TooltipTrigger>
            <TooltipContent side='left'>
              <p className='text-base'>Download</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </header>
      <footer>
        <TooltipProvider delayDuration={100} disableHoverableContent>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="flex justify-center items-center w-full p-4 relative hover:before:h-full hover:before:bg-white hover:before:w-[4px] hover:before:content-[''] hover:before:absolute hover:before:top-0 hover:before:left-0 hover:before:right-0 hover:before:z-10 hover:before:border-gray-300">
                <ArrowUpRightSquareIcon className='w-8 h-8 min-w-8' />
              </button>
            </TooltipTrigger>
            <TooltipContent side='left'>
              <p className='text-base'>Preview</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={100} disableHoverableContent>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="flex justify-center items-center w-full p-4 relative hover:before:h-full hover:before:bg-white hover:before:w-[4px] hover:before:content-[''] hover:before:absolute hover:before:top-0 hover:before:left-0 hover:before:right-0 hover:before:z-10 hover:before:border-gray-300">
                <CopyIcon className='w-8 h-8 min-w-8' />
              </button>
            </TooltipTrigger>
            <TooltipContent side='left'>
              <p className='text-base'>Copy to Clipboard</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={100} disableHoverableContent>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="flex justify-center items-center w-full p-4 relative hover:before:h-full hover:before:bg-white hover:before:w-[4px] hover:before:content-[''] hover:before:absolute hover:before:top-0 hover:before:left-0 hover:before:right-0 hover:before:z-10 hover:before:border-gray-300">
                <SettingsIcon className='w-8 h-8 min-w-8' />
              </button>
            </TooltipTrigger>
            <TooltipContent side='left'>
              <p className='text-base'>Settings</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </footer>
    </aside>
  )
}
