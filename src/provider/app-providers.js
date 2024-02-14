'use client'

import { AppSharedDataProvider } from '@/context/app-shared-data'
import { EditorProvider } from '@/context/editor-configs'

export default function AppProviders({ children }) {
  return (
    <>
      <AppSharedDataProvider>
        <EditorProvider>{children}</EditorProvider>
      </AppSharedDataProvider>
    </>
  )
}
