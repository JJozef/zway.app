'use client'

import { EditorProvider } from '@/context/editor-configs'

export default function EditorConfigsProvider({ children }) {
  return <EditorProvider>{children}</EditorProvider>
}
