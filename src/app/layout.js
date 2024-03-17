import '@/styles/globals.css'

import { siteConfig } from '@/root/config/site'
import { Inter as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/sonner'

import { ThemeProvider } from '@/provider/theme-provider'

import AppProviders from '@/provider/app-providers'
import MenubarNavigation from '@/components/menubar-navigation'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Playground',
    'HTML',
    'CSS',
    'JavaScript',
    'Code',
    'Editor',
    'Real-time',
    'Monaco Editor'
  ],
  authors: [
    {
      name: 'Jose Ignacio (@Jozefzin)',
      url: 'https://zway.vercel.app'
    }
  ],
  creator: 'Jose Ignacio (@Jozefzin)',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@Jozefzin'
  }
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
            <Toaster
              position='top-center'
              expand={false}
              richColors
              closeButton
            />
          </AppProviders>
        </ThemeProvider>
      </body>
    </html>
  )
}
