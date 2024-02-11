import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Input } from './ui/input'
import { AlertDialogDescription } from '@radix-ui/react-alert-dialog'
import { Badge } from './ui/badge'
import Link from 'next/link'

export default function ModalDependencies({ children }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className='flex flex-col space-y-3 max-w-4xl w-full max-h-[80dvh] h-full overflow-y-auto'>
        <AlertDialogHeader className='block space-y-2 h-fit sm:space-y-1'>
          <AlertDialogTitle className='flex items-center flex-col gap-3 sm:flex-row max-sm:gap-0'>
            Add dependency
            <Badge variant='secondary'>JavaScript</Badge>
          </AlertDialogTitle>
          <AlertDialogDescription className='text-sm'>
            An import statement will be added to the top of the JavaScript
            editor for the package.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className='space-y-3'>
          <div className='flex flex-col gap-1'>
            <Input type='text' placeholder='Search npm and add a package...' />
            <p className='text-xs text-neutral-500 px-px select-none'>
              2093 results for "react"
            </p>
          </div>
          <section className='py-2'>
            <h2 className='text-lg pb-2 select-none'>Results</h2>
            <ul className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
              <li className='flex flex-col p-3 border hover:bg-neutral-900 rounded-lg cursor-pointer'>
                <div>
                  <h3 className='text-base'>react</h3>
                  <p className='text-sm mb-2 text-pretty'>
                    React is a JavaScript library for building user interfaces.
                  </p>
                </div>
                <div className='flex justify-between text-xs'>
                  <p className='text-neutral-500'>
                    <code>v17.0.2</code>
                  </p>
                  <Link href='#' className='text-neutral-500 hover:text-white'>
                    details
                  </Link>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}
