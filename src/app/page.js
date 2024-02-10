/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { cn } from '@/lib/utils'
import {
  DecodeURLHashed,
  GenerateHTML,
  GenerateURLHashed
} from '@/lib/function'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import CodeEditor from '@/components/codeEditor'

import Aside from '@/components/aside'

export default function Home() {
  const pathname = usePathname()

  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [htmlTemplate, setHtmlTemplate] = useState('')

  const handleInputChange = (value, target) => {
    if (target === 'html') return setHtml(value)
    if (target === 'css') return setCss(value)
    if (target === 'javascript') return setJs(value)
  }

  useEffect(() => {
    setHtmlTemplate(GenerateHTML({ html, css, js }))

    const url = GenerateURLHashed({ html, css, js })
    history.replaceState('', '', `/${url}`)
  }, [html, css, js])

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

  return (
    <main className={cn('h-full flex flex-row')}>
      <Aside />
      <CodeEditor
        html={html}
        css={css}
        js={js}
        preview={htmlTemplate}
        setValues={handleInputChange}
      />
    </main>
  )
}
