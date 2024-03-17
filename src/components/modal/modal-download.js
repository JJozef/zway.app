/* eslint-disable react/jsx-curly-newline */

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { downloadMyCode } from '@/lib/download'
import { useEditorContext } from '@/context/editor-configs'
import { useAppSharedDataContext } from '@/context/app-shared-data'
import { CSSIcon, FolderArchiveIcon, HTMLIcon, JSIcon } from '@/components/ui/icons'
import { useMediaQuery } from '@/lib/hooks/use-media-query'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'

export default function ModalDownload({ children, disabled }) {
  const { editorState } = useEditorContext()
  const { sharedData } = useAppSharedDataContext()
  const [selectedFiles, setSelectedFiles] = useState({
    html: false,
    css: false,
    js: false,
    singleFile: false
  })
  const [open, setOpen] = useState(false)
  const { html, css, javascript } = sharedData
  const { zipFileName } = editorState
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const isAllFilesSelected =
    selectedFiles.html && selectedFiles.css && selectedFiles.js

  const toggleFileSelection = (fileType) => {
    setSelectedFiles((prevFiles) => ({
      ...prevFiles,
      [fileType]: !prevFiles[fileType]
    }))
  }

  const selectAllFiles = () => {
    setSelectedFiles((prevFiles) => ({
      ...prevFiles,
      html: !isAllFilesSelected,
      css: !isAllFilesSelected,
      js: !isAllFilesSelected
    }))
  }

  const handleDownload = async () => {
    await downloadMyCode({
      html,
      css,
      javascript,
      files: selectedFiles,
      zipFileName
    })
  }

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger
          className={cn(
            'w-full relative select-none rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent focus:bg-accent focus:text-accent-foreground',
            'flex items-center gap-2 cursor-pointer',
            disabled && 'disabled:pointer-events-none disabled:opacity-50'
          )}
          disabled={disabled}
        >
          {children}
        </DialogTrigger>
        <DialogContent className='w-full max-w-2xl flex flex-col space-y-3 gap-8 overflow-y-auto z-[99]'>
          <DialogHeader>
            <DialogTitle>Download your code</DialogTitle>
            <DialogDescription>
              Download your code as a zip file with the HTML, CSS, and
              JavaScript files
            </DialogDescription>
          </DialogHeader>
          <ModalDrawerContent
            selectedFiles={selectedFiles}
            setSelectedFiles={setSelectedFiles}
            isAllFilesSelected={isAllFilesSelected}
            handleDownload={handleDownload}
            toggleFileSelection={toggleFileSelection}
            selectAllFiles={selectAllFiles}
          />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger
        className={cn(
          'w-full relative select-none rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent focus:bg-accent focus:text-accent-foreground',
          'flex items-center gap-2 cursor-pointer',
          disabled && 'disabled:pointer-events-none disabled:opacity-50'
        )}
        disabled={disabled}
      >
        {children}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className='text-center'>
          <DrawerTitle>Download your code</DrawerTitle>
          <DrawerDescription>
            Download your code as a zip file with the HTML, CSS, and JavaScript
            files
          </DrawerDescription>
        </DrawerHeader>
        <ModalDrawerContent
          className='p-3'
          selectedFiles={selectedFiles}
          setSelectedFiles={setSelectedFiles}
          isAllFilesSelected={isAllFilesSelected}
          handleDownload={handleDownload}
          toggleFileSelection={toggleFileSelection}
          selectAllFiles={selectAllFiles}
        />
        <DrawerFooter className='pt-1 px-3'>
          <DrawerClose asChild>
            <Button variant='outline'>Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

const ModalDrawerContent = ({
  selectedFiles,
  setSelectedFiles,
  isAllFilesSelected,
  handleDownload,
  toggleFileSelection,
  selectAllFiles,
  className
}) => {
  return (
    <section className={cn('space-y-8', className)}>
      <Label className='flex flex-col space-y-1 -mb-5'>
        <span>Files options</span>
        <span className='font-normal leading-snug text-muted-foreground'>
          Choose the files you want to download
        </span>
      </Label>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-3'>
        {['html', 'css', 'js'].map((fileType) => {
          const isDisabled = selectedFiles.singleFile
          const isFileSelected = selectedFiles[fileType]
          const fileName = fileType.toUpperCase()

          return (
            <ButtonOption
              key={fileType}
              active={isFileSelected}
              onClick={() => toggleFileSelection(fileType)}
              disabled={isDisabled}
              title={`Download ${fileName} file`}
            >
              {fileType === 'html' && (
                <HTMLIcon className='w-12 h-12 min-w-12 text-red-400 group-hover:scale-105 transition-transform duration-200' />
              )}
              {fileType === 'css' && (
                <CSSIcon className='w-12 h-12 min-w-12 text-blue-400 group-hover:scale-105 transition-transform duration-200' />
              )}
              {fileType === 'js' && (
                <JSIcon className='w-12 h-12 min-w-12 text-yellow-400 group-hover:scale-105 transition-transform duration-200' />
              )}
              {fileName}
            </ButtonOption>
          )
        })}
        <ButtonOption
          active={isAllFilesSelected}
          onClick={selectAllFiles}
          disabled={selectedFiles.singleFile}
          title='Download all files'
        >
          <FolderArchiveIcon className='w-12 h-12 min-w-12 text-neutral-300 group-hover:scale-105 transition-transform duration-200' />
          ALL FILES
        </ButtonOption>
      </div>
      <div className='flex items-center justify-between space-x-2'>
        <Label htmlFor='single-file' className='flex flex-col space-y-1'>
          <span>Single file</span>
          <span className='font-normal leading-snug text-muted-foreground'>
            Download all the code in a single file (index.html)
          </span>
        </Label>
        <Switch
          id='single-file'
          checked={selectedFiles.singleFile}
          onCheckedChange={() =>
            setSelectedFiles((prevFiles) => ({
              ...prevFiles,
              html: false,
              css: false,
              js: false,
              singleFile: !prevFiles.singleFile
            }))
          }
        />
      </div>

      <Button
        className='w-full'
        variant='secondary'
        onClick={handleDownload}
        disabled={
          !selectedFiles.html &&
          !selectedFiles.css &&
          !selectedFiles.js &&
          !selectedFiles.singleFile
        }
      >
        Download
      </Button>
    </section>
  )
}

const ButtonOption = ({ children, active, ...props }) => {
  return (
    <button
      className={cn(
        'w-full h-auto rounded-md flex flex-col items-center justify-center gap-2 group border p-2 hover:bg-accent transition-colors duration-200',
        'disabled:pointer-events-none disabled:opacity-50',
        active && 'bg-accent'
      )}
      {...props}
    >
      {children}
    </button>
  )
}
