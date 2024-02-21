/* eslint-disable multiline-ternary */
'use client'

import { Button } from './ui/button'
import { useAppSharedDataContext } from '@/context/app-shared-data'
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
  CheckIcon,
  DownloadIcon,
  GitHubIcon,
  PanelsTopLeftIcon,
  ScreenShareIcon,
  SettingsIcon,
  TerminalIcon2
} from '@/components/ui/icons'
import Link from 'next/link'
import ModalDependencies from './modal/modal-dependencies'
import SheetEditorSettings from './sheet/sheet-editor-settings'
import useCopyToClipboard from '@/lib/hooks/use-copy-to-clipboard'

export default function MenubarNavigation() {
  const { sharedData } = useAppSharedDataContext()
  const { copied, copyToClipboard } = useCopyToClipboard()

  const copyLink = (e) => {
    e.preventDefault()
    return copyToClipboard(`https://zway.vercel.app/${sharedData.url}`)
  }

  return (
    <Menubar className='min-h-10 h-auto flex items-center justify-between w-full rounded-none border-0 bg-neutral-950 border-b border-neutral-950 overflow-y-hidden overflow-x-auto'>
      <div className='flex items-center'>
        <MenubarMenu>
          <MenubarTrigger className='flex items-center gap-2 py-1.5 px-3 cursor-pointer'>
            <PanelsTopLeftIcon className='w-4 h-4 min-w-4 stroke-[2]' />
            Editor
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem className='cursor-pointer' disabled>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem
              className='flex items-center gap-2 cursor-pointer'
              disabled
            >
              <TerminalIcon2 className='w-4 h-4 min-w-4' />
              Terminal
            </MenubarItem>
            <MenubarItem
              className='flex items-center gap-2 cursor-pointer'
              disabled
            >
              <DownloadIcon className='w-4 h-4 min-w-4' />
              Download
            </MenubarItem>
            <MenubarItem
              className='flex items-center gap-2 cursor-pointer'
              onClick={copyLink}
              disabled={!sharedData.url}
            >
              {copied ? (
                <>
                  <CheckIcon className='w-4 h-4 min-w-4' />
                  Copied
                </>
              ) : (
                <>
                  <ArrowUpRightSquareIcon className='w-4 h-4 min-w-4' />
                  Share
                </>
              )}
            </MenubarItem>
            <MenubarItem
              className='flex items-center gap-2 cursor-pointer'
              asChild
            >
              <Link
                href={sharedData.urlBlob}
                target='_blank'
                rel='noopener noreferrer'
                disabled={!sharedData.urlBlob}
                prefetch={false}
              >
                <ScreenShareIcon className='w-4 h-4 min-w-4' />
                Preview
              </Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <ModalDependencies>
            <MenubarTrigger className='flex items-center gap-2 py-1.5 px-3 cursor-pointer'>
              <BlocksIcon className='w-4 h-4 min-w-4 stroke-[2]' />
              Dependencies
            </MenubarTrigger>
          </ModalDependencies>
        </MenubarMenu>
        <MenubarMenu>
          <SheetEditorSettings>
            <MenubarTrigger className='flex items-center gap-2 py-1.5 px-3 cursor-pointer'>
              <SettingsIcon className='w-4 h-4 min-w-4 stroke-[2]' />
              Settings
            </MenubarTrigger>
          </SheetEditorSettings>
        </MenubarMenu>
      </div>
      <MenubarMenu>
        <Button className='h-auto py-1.5 px-3' variant='outline' asChild>
          <Link
            href='https://github.com/JJozef/zway.app'
            className='group cursor-pointer'
            rel='noopener noreferrer'
            target='_blank'
            role='menuitem'
            aria-label='GitHub repository of the project'
          >
            <GitHubIcon className='w-4 h-4 min-w-4 stroke-[2] group-hover:scale-110 transition-transform duration-200' />
          </Link>
        </Button>
      </MenubarMenu>
    </Menubar>
  )
}
