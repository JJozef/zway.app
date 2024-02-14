/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { useMediaQuery } from '@/lib/hooks/use-media-query'
import { useEditorContext } from '@/context/editor-configs'
import { useAppSharedDataContext } from '@/context/app-shared-data'
import { useCurrentURLValues } from '@/lib/hooks/use-current-url-values'
import { EDITOR_LAYOUTS } from '@/lib/contants'
import {
  GenerateHTML,
  GenerateURLHashed,
  ReplaceStateURL
} from '@/lib/function'
import CodeEditorBoxes from '@/components/code-editor-boxes'
import CodeEditorTabs from '@/components/code-editor-tabs'
import GenerateBlobURL from '@/lib/hooks/use-generate-blob-url'

export default function Home() {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const { layoutEditors } = useEditorContext()?.editorState
  const { setSharedData } = useAppSharedDataContext()

  const [code, setCode] = useState({ html: '', css: '', js: '' })
  const [url] = useDebounce(GenerateURLHashed(code), 200)
  const urlBlob = GenerateBlobURL({ html: GenerateHTML(code) })

  const handleInputChange = (value, target) => {
    setCode((prevCode) => ({ ...prevCode, [target]: value }))
  }

  useEffect(() => {
    ReplaceStateURL(url)

    setSharedData((prevSharedData) => ({
      ...prevSharedData,
      url,
      urlBlob
    }))
  }, [code, url])

  const {
    html: decodedHtml,
    css: decodedCss,
    js: decodedJs
  } = useCurrentURLValues()

  useEffect(() => {
    setCode({ html: decodedHtml, css: decodedCss, js: decodedJs })
  }, [decodedHtml, decodedCss, decodedJs])

  if (isDesktop && layoutEditors === EDITOR_LAYOUTS.boxes) {
    return (
      <CodeEditorBoxes
        html={code.html}
        css={code.css}
        js={code.js}
        preview={urlBlob}
        handleInputChange={handleInputChange}
      />
    )
  }

  return (
    <CodeEditorTabs
      html={code.html}
      css={code.css}
      js={code.js}
      preview={urlBlob}
      handleInputChange={handleInputChange}
    />
  )
}
