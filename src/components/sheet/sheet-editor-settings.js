import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { useEditorContext } from '@/context/editor-configs'
import { Button } from '@/components/ui/button'
import { SettingsIcon } from '@/components/ui/icons'
import { toast } from 'sonner'
import { EDITOR_LAYOUTS } from '@/lib/contants'
import { cn } from '@/lib/utils'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

export default function SheetEditorSettings({ children }) {
  const [open, setOpen] = useState(false)
  const { editorState, setEditorState } = useEditorContext()

  const form = useForm({
    defaultValues: {
      theme: editorState.theme,
      lineNumbers: editorState.lineNumbers,
      wordWrap: editorState.wordWrap,
      fontSize: editorState.fontSize,
      minimap: editorState.minimap,
      fontLigatures: editorState.fontLigatures,
      tabSize: editorState.tabSize,
      zipFileName: editorState.zipFileName,
      saveLocalstorage: editorState.saveLocalstorage,
      layoutEditors: editorState.layoutEditors
    }
  })

  function onSubmit(values) {
    const valuesToSave = {
      theme: values.theme,
      lineNumbers: values.lineNumbers,
      wordWrap: values.wordWrap,
      fontSize: Number(values.fontSize),
      minimap: values.minimap,
      fontLigatures: values.fontLigatures,
      tabSize: values.tabSize,
      zipFileName: values.zipFileName,
      saveLocalstorage: values.saveLocalstorage,
      layoutEditors: values.layoutEditors
    }

    setEditorState(valuesToSave)

    toast.success('Settings saved')
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className='p-0'>
        <SheetHeader className='px-4 py-5'>
          <SheetTitle>Editor Settings</SheetTitle>
        </SheetHeader>
        <div className='px-4 pt-2 overflow-auto max-h-[calc(100%-67px)]'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <FormField
                control={form.control}
                name='layoutEditors'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <Badge className='px-1 text-xs mr-1' variant='secondary'>
                        Editor:
                      </Badge>
                      Layout
                    </FormLabel>
                    <FormControl>
                      <div className='flex items-center justify-start gap-2 px-2'>
                        <button
                          className={cn(
                            'grid grid-rows-2 w-fit gap-[2px] size-6 border-0 outline-none focus:outline-none hover:ring-2 ring-offset-1 ring-offset-zinc-900 ring-white',
                            field.value === EDITOR_LAYOUTS.boxes &&
                              'ring-2 ring-offset-1 ring-offset-zinc-900 ring-white'
                          )}
                          onClick={() => field.onChange(EDITOR_LAYOUTS.boxes)}
                          type='button'
                          title='Boxes Layout'
                        >
                          <div className='flex items-center gap-px'>
                            <div className='size-3 rounded-[2px] bg-red-400' />
                            <div className='size-3 rounded-[2px] bg-blue-400' />
                          </div>
                          <div className='flex items-center gap-px'>
                            <div className='size-3 rounded-[2px] bg-yellow-400' />
                            <div className='size-3 rounded-[2px] bg-white' />
                          </div>
                        </button>
                        <button
                          className={cn(
                            'grid grid-rows-2 w-fit gap-px size-6 border-0 outline-none focus:outline-none hover:ring-2 ring-offset-1 ring-offset-zinc-900 ring-white',
                            field.value === EDITOR_LAYOUTS.tabs &&
                              'ring-2 ring-offset-1 ring-offset-zinc-900 ring-white'
                          )}
                          onClick={() => field.onChange(EDITOR_LAYOUTS.tabs)}
                          type='button'
                          title='Tabs Layout'
                        >
                          <div className='flex flex-row justify-between items-center gap-px w-6 h-[10px] border-2 border-white rounded-[2px] px-px'>
                            <div className='w-1 h-1 bg-red-400 rounded-[1px]' />
                            <div className='w-1 h-1 bg-blue-400 rounded-[1px]' />
                            <div className='w-1 h-1 bg-yellow-400 rounded-[1px]' />
                            <div className='w-1 h-1 bg-white rounded-[1px]' />
                          </div>
                          <div className='w-6 p-px rounded-[2px] bg-gradient-to-r from-red-400 via-blue-400 to-yellow-400'>
                            <div className='size-full flex items-center justify-center p-px bg-white rounded-[2px]'>
                              <code className='leading-normal text-black select-none truncate'>
                                <h1 className='text-[3px] text-center'>
                                  My Code
                                </h1>
                                <p className='text-[2px]'>
                                  Lorem ipsum dolor sit amet
                                </p>
                              </code>
                            </div>
                          </div>
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='theme'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <Badge className='px-1 text-xs mr-1' variant='secondary'>
                        Editor:
                      </Badge>
                      Color Theme
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value)
                        }}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder='Theme' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='vs-dark'>Dark</SelectItem>
                          <SelectItem value='vs'>Light</SelectItem>
                          <SelectItem value='hc-black'>
                            High Contrast Dark
                          </SelectItem>
                          <SelectItem value='hc-light'>
                            High Contrast Light
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='lineNumbers'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <Badge className='px-1 text-xs mr-1' variant='secondary'>
                        Editor:
                      </Badge>
                      Line Numbers
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value)
                        }}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder='Theme' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='on'>On</SelectItem>
                          <SelectItem value='off'>Off</SelectItem>
                          <SelectItem value='relative'>Relative</SelectItem>
                          <SelectItem value='interval'>Interval</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='wordWrap'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <Badge className='px-1 text-xs mr-1' variant='secondary'>
                        Editor:
                      </Badge>
                      Word Wrap
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value)
                        }}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder='Theme' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='on'>On</SelectItem>
                          <SelectItem value='off'>Off</SelectItem>
                          <SelectItem value='wordWrapColumn'>
                            Wrap Column
                          </SelectItem>
                          <SelectItem value='bounded'>Bounded</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='fontSize'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <Badge className='px-1 text-xs mr-1' variant='secondary'>
                        Editor:
                      </Badge>
                      Font Size
                    </FormLabel>
                    <FormControl>
                      <Input
                        type='number'
                        placeholder='Font Size'
                        className='w-full'
                        min={1}
                        max={100}
                        step={1}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='tabSize'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <Badge className='px-1 text-xs mr-1' variant='secondary'>
                        Editor:
                      </Badge>
                      Tab Size
                    </FormLabel>
                    <FormControl>
                      <Input
                        type='number'
                        placeholder='Tab Size'
                        className='w-full'
                        min={1}
                        max={100}
                        step={1}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='minimap'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className='flex flex-col gap-2'>
                        <FormLabel>
                          <Badge
                            className='px-1 text-xs mr-1'
                            variant='secondary'
                          >
                            Editor:
                          </Badge>
                          Minimap
                        </FormLabel>
                        <div className='flex items-center gap-2'>
                          <Checkbox
                            onCheckedChange={(value) => {
                              field.onChange(value)
                            }}
                            checked={field.value}
                          />
                          <FormLabel className='text-xs'>
                            Show Minimap
                          </FormLabel>
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='fontLigatures'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className='flex flex-col gap-2'>
                        <FormLabel>
                          <Badge
                            className='px-1 text-xs mr-1'
                            variant='secondary'
                          >
                            Editor:
                          </Badge>
                          Font Ligatures
                        </FormLabel>
                        <div className='flex items-center gap-2'>
                          <Checkbox
                            onCheckedChange={(value) => {
                              field.onChange(value)
                            }}
                            checked={field.value}
                          />
                          <FormLabel className='text-xs'>
                            Enable Font Ligatures
                          </FormLabel>
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='saveLocalstorage'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className='flex flex-col gap-2'>
                        <FormLabel>
                          <Badge
                            className='px-1 text-xs mr-1'
                            variant='secondary'
                          >
                            Auto save:
                          </Badge>
                          Local storage
                        </FormLabel>
                        <div className='flex items-center gap-2'>
                          <Checkbox
                            onCheckedChange={(value) => {
                              field.onChange(value)
                            }}
                            checked={field.value}
                          />
                          <FormLabel className='text-xs'>
                            Automatically save URL to local storage for fast
                            content loading
                          </FormLabel>
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='zipFileName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <Badge className='px-1 text-xs mr-1' variant='secondary'>
                        Download:
                      </Badge>
                      File Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        autoComplete='off'
                        type='text'
                        placeholder='File Name'
                        className='w-full'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className='sticky bottom-0 left-0 py-2 bg-background'>
                <Button className='w-full' type='submit'>
                  <SettingsIcon className='w-4 h-4 min-w-4 mr-2' />
                  Save Settings
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  )
}
