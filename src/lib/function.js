import { encode, decode } from 'js-base64'

export function GenerateHTML({ html, css, js }) {
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
            ${js}
        </script>
    </html>
    `
}

export function GenerateURLHashed({ html, css, js }) {
  return `${encode(html || '')}|${encode(css || '')}|${encode(js || '')}`
}

export function DecodeURLHashed(encoded) {
  if (!encoded) return ''
  return decode(encoded)
}
