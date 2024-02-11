'use client'
import { useCallback, useState } from 'react'

export default function useCopyToClipboard(timeoutDuration = 1000) {
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState(null)

  const copyToClipboard = useCallback(
    async (text) => {
      try {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setError(null)
        setTimeout(() => setCopied(false), timeoutDuration)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to copy text'))
      }
    },
    [timeoutDuration]
  )

  return { copied, error, copyToClipboard }
}
