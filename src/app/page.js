'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useDebounce } from 'use-debounce'
import { useMediaQuery } from '@/lib/hooks/use-media-query'
import { useEditorContext } from '@/context/editor-configs'
import { EDITOR_LAYOUTS } from '@/lib/contants'
import {
  DecodeURLHashed,
  GenerateHTML,
  GenerateURLHashed
} from '@/lib/function'
import CodeEditorBoxes from '@/components/code-editor-boxes'
import CodeEditorTabs from '@/components/code-editor-tabs'

export default function Home() {
  const pathname = usePathname()
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [htmlTemplate, setHtmlTemplate] = useState('')
  const [url] = useDebounce(GenerateURLHashed({ html, css, js }), 200)
  const { layoutEditors } = useEditorContext()?.editorState

  const handleInputChange = (value, target) => {
    if (target === 'html') return setHtml(value)
    if (target === 'css') return setCss(value)
    if (target === 'javascript') return setJs(value)
  }

  useEffect(() => {
    setHtmlTemplate(GenerateHTML({ html, css, js }))
    history.replaceState('', '', `/${url}`)
  }, [html, css, js, url])

  useEffect(() => {
    if (!pathname || pathname.startsWith('%7C')) return

    const [htmlRaw, cssRaw, jsRaw] = pathname.slice(1)?.split('%7C')

    const html = DecodeURLHashed(htmlRaw)
    const css = DecodeURLHashed(cssRaw)
    const js = DecodeURLHashed(jsRaw)

    setHtml(html)
    setCss(css)
    setJs(js)
    setHtmlTemplate(
      GenerateHTML({
        html,
        css,
        js
      })
    )
  }, [pathname])

  if (isDesktop && layoutEditors === EDITOR_LAYOUTS.boxes) {
    return (
      <CodeEditorBoxes
        html={html}
        css={css}
        js={js}
        preview={htmlTemplate}
        setValues={handleInputChange}
      />
    )
  }

  return (
    <CodeEditorTabs
      html={html}
      css={css}
      js={js}
      htmlTemplate={htmlTemplate}
      handleInputChange={handleInputChange}
    />
  )
}
