'use client'

// vercel analytics
import { Analytics } from '@vercel/analytics/react'

// contexts
import { AppSharedDataProvider } from '@/context/app-shared-data'
import { EditorProvider } from '@/context/editor-configs'

export default function AppProviders({ children }) {
  return (
    <>
      <AppSharedDataProvider>
        <EditorProvider>{children}</EditorProvider>
      </AppSharedDataProvider>
      <Analytics />
    </>
  )
}
