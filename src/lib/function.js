import { encode, decode } from 'js-base64'

export function GenerateHTML({ html, css, javascript }) {
  return `
    <!DOCTYPE html>
    <html lang='en' suppressHydrationWarning>
      <head>
        <style>
          ${css}
        </style>
      </head>
      <body>
        ${html}
      </body>
        <script>
            ${javascript}
        </script>
    </html>
    `
}

export function GenerateURLHashed({ html, css, javascript }) {
  return `${encode(html || '')}|${encode(css || '')}|${encode(javascript || '')}`
}

export function DecodeURLHashed(encoded) {
  if (!encoded) return ''
  return decode(encoded)
}

export const ReplaceStateURL = (url) => {
  return window.history.replaceState(
    { ...window.history.state, as: url, url },
    '',
    url
  )
}
