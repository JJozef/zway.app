import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { Checkbox } from './ui/checkbox'
import { Badge } from './ui/badge'
import { useEditorContext } from '@/context/editor-configs'
import { Button } from './ui/button'
import { SettingsIcon } from './ui/icons'
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
  const { editorState, setEditorState } = useEditorContext()

  const form = useForm({
    defaultValues: {
      theme: editorState.theme,
      lineNumbers: editorState.lineNumbers,
      wordWrap: editorState.wordWrap,
      fontSize: editorState.fontSize,
      minimap: editorState.minimap,
      fontLigatures: editorState.fontLigatures,
      preservegrid: editorState.preservegrid,
      tabSize: editorState.tabSize,
      zipFileName: editorState.zipFileName,
      saveLocalstorage: editorState.saveLocalstorage
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
      preservegrid: values.preservegrid,
      tabSize: values.tabSize,
      zipFileName: values.zipFileName,
      saveLocalstorage: values.saveLocalstorage
    }

    setEditorState(valuesToSave)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Editor Settings</SheetTitle>
        </SheetHeader>
        <div className='pt-5 px-px overflow-auto max-h-[calc(100%-10px)]'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
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
                name='preservegrid'
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
                          Preserve Grid
                        </FormLabel>
                        <div className='flex items-center gap-2'>
                          <Checkbox
                            onCheckedChange={(value) => {
                              field.onChange(value)
                            }}
                            checked={field.value}
                          />
                          <FormLabel className='text-xs'>
                            Preserve grid layout
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

              <div className='flex justify-end'>
                <Button type='submit'>
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
