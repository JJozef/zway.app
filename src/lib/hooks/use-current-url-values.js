import { usePathname } from 'next/navigation'
import { DecodeURLHashed } from '../function'

export const useCurrentURLValues = () => {
  const pathname = usePathname()

  const decodeURL = (pathname) => {
    if (!pathname || pathname.startsWith('%7C')) {
      return { html: '', css: '', js: '' }
    }

    const [htmlRaw, cssRaw, jsRaw] = pathname.slice(1)?.split('%7C')

    return {
      html: DecodeURLHashed(htmlRaw),
      css: DecodeURLHashed(cssRaw),
      js: DecodeURLHashed(jsRaw)
    }
  }

  return decodeURL(pathname)
}
