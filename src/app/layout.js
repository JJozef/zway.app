import '@/styles/globals.css'
import { Inter as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'

import { ThemeProvider } from '@/provider/theme-provider'

import AppProviders from '@/provider/app-providers'
import MenubarNavigation from '@/components/menubar-navigation'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata = {
  title: 'zway.app | Real-time HTML, CSS, JavaScript Playground',
  description:
    'Your go-to web playground for HTML, CSS, and JavaScript. Code, tweak, and visualize your creations instantly with our live editor.',
  url: 'https://zway.vercel.app',
  siteName: 'zway.app',
  images: [
    {
      url: 'https://zway.vercel.app/zway-app.png',
      width: 800,
      height: 600,
      alt: 'zway.app'
    },
    {
      url: 'https://zway.vercel.app/zway-app.png',
      width: 1800,
      height: 1600,
      alt: 'zway.app'
    }
  ],
  locale: 'en_US',
  type: 'website'
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
          <AppProviders>
            <main className={cn('h-full flex flex-col')}>
              <MenubarNavigation />
              {children}
            </main>
          </AppProviders>
        </ThemeProvider>
      </body>
    </html>
  )
}
