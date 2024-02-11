'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useDebounce } from 'use-debounce'
import {
  DecodeURLHashed,
  GenerateHTML,
  GenerateURLHashed
} from '@/lib/function'
import CodeEditor from '@/components/code-editor'
import MenubarNavigation from '@/components/menubar-navigation'

export default function Home() {
  const pathname = usePathname()

  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [htmlTemplate, setHtmlTemplate] = useState('')
  const [url] = useDebounce(GenerateURLHashed({ html, css, js }), 200)

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

  return (
    <main className={cn('h-full flex flex-col')}>
      <MenubarNavigation />
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
