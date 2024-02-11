import '@/styles/globals.css'
import { Inter as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'

import { ThemeProvider } from '@/provider/theme-provider'
import EditorConfigsProvider from '@/provider/editor-configs-provider'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata = {
  title: 'zway.app',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'font-sans antialiased bg-neutral-800',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          forcedTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <EditorConfigsProvider>{children}</EditorConfigsProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
