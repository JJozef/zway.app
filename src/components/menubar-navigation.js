import { Button } from './ui/button'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger
} from '@/components/ui/menubar'
import {
  ArrowUpRightSquareIcon,
  BlocksIcon,
  CopyIcon,
  DownloadIcon,
  GitHubIcon,
  PanelsTopLeftIcon,
  SettingsIcon,
  TerminalIcon2
} from '@/components/ui/icons'
import Link from 'next/link'
import ModalDependencies from './modal-dependencies'
import SheetEditorSettings from './sheet-editor-settings'

export default function MenubarNavigation() {
  return (
    <Menubar className='h-auto flex items-center justify-between w-full rounded-none border-0 bg-neutral-950 border-b border-neutral-950 overflow-y-hidden overflow-x-auto'>
      <div className='flex items-center'>
        <MenubarMenu>
          <MenubarTrigger className='flex items-center gap-2 py-1.5 px-3'>
            <PanelsTopLeftIcon className='w-4 h-4 min-w-4 stroke-[2]' />
            Editor
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem className='flex items-center gap-2'>
              <TerminalIcon2 className='w-4 h-4 min-w-4' />
              Terminal
            </MenubarItem>
            <MenubarItem className='flex items-center gap-2'>
              <CopyIcon className='w-4 h-4 min-w-4 ' />
              Copy
            </MenubarItem>
            <MenubarItem className='flex items-center gap-2'>
              <DownloadIcon className='w-4 h-4 min-w-4' />
              Download
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem className='flex items-center gap-2'>
              <ArrowUpRightSquareIcon className='w-4 h-4 min-w-4' />
              Preview
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <ModalDependencies>
            <MenubarTrigger className='flex items-center gap-2 py-1.5 px-3'>
              <BlocksIcon className='w-4 h-4 min-w-4 stroke-[2]' />
              Dependencies
            </MenubarTrigger>
          </ModalDependencies>
        </MenubarMenu>
        <MenubarMenu>
          <SheetEditorSettings>
            <MenubarTrigger className='flex items-center gap-2 py-1.5 px-3'>
              <SettingsIcon className='w-4 h-4 min-w-4 stroke-[2]' />
              Settings
            </MenubarTrigger>
          </SheetEditorSettings>
        </MenubarMenu>
      </div>
      <MenubarMenu>
        <Button className='h-auto py-1.5 px-3' variant='outline' asChild>
          <Link href='#' className='group cursor-pointer'>
            <GitHubIcon className='w-4 h-4 min-w-4 stroke-[2] group-hover:scale-110 transition-transform duration-200' />
          </Link>
        </Button>
      </MenubarMenu>
    </Menubar>
  )
}
