'use client'

import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { useMediaQuery } from '@/lib/hooks/use-media-query'
import { useEditorContext } from '@/context/editor-configs'
import { useCurrentURLValues } from '@/lib/hooks/use-current-url-values'
import { EDITOR_LAYOUTS } from '@/lib/contants'
import {
  GenerateHTML,
  GenerateURLHashed,
  ReplaceStateURL
} from '@/lib/function'
import CodeEditorBoxes from '@/components/code-editor-boxes'
import CodeEditorTabs from '@/components/code-editor-tabs'

export default function Home() {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [htmlTemplate, setHtmlTemplate] = useState('')
  const [url] = useDebounce(GenerateURLHashed({ html, css, js }), 200)
  const { layoutEditors } = useEditorContext()?.editorState

  const handleInputChange = (value, target) => {
    switch (target) {
      case 'html':
        return setHtml(value)
      case 'css':
        return setCss(value)
      case 'javascript':
        return setJs(value)
    }
  }

  useEffect(() => {
    setHtmlTemplate(GenerateHTML({ html, css, js }))
    ReplaceStateURL(url)
  }, [html, css, js, url])

  const {
    html: decodedHtml,
    css: decodedCss,
    js: decodedJs
  } = useCurrentURLValues()

  useEffect(() => {
    setHtml(decodedHtml)
    setCss(decodedCss)
    setJs(decodedJs)
    setHtmlTemplate(
      GenerateHTML({ html: decodedHtml, css: decodedCss, js: decodedJs })
    )
  }, [decodedHtml, decodedCss, decodedJs])

  if (isDesktop && layoutEditors === EDITOR_LAYOUTS.boxes) {
    return (
      <CodeEditorBoxes
        html={html}
        css={css}
        js={js}
        preview={htmlTemplate}
        handleInputChange={handleInputChange}
      />
    )
  }

  return (
    <CodeEditorTabs
      html={html}
      css={css}
      js={js}
      preview={htmlTemplate}
      handleInputChange={handleInputChange}
    />
  )
}
