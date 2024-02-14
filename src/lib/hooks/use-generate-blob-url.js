/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

/**
 * - Generate a blob URL from an HTML string
 * @param {string} html
 * @return {string} blobURL
 */

export default function GenerateBlobURL({ html }) {
  const [blobURL, setBlobURL] = useState(null)

  useEffect(() => {
    const blob = new Blob([html], { type: 'text/html' })
    setBlobURL(URL.createObjectURL(blob))

    return () => {
      URL.revokeObjectURL(blobURL)
    }
  }, [html])

  return blobURL
}
