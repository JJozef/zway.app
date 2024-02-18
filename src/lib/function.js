import { encode, decode } from 'js-base64'

export function GenerateHTML({ html, css, javascript }) {
  return `
    <!DOCTYPE html>
    <html lang='en'>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script type="module">
          ${javascript}
        </script>
      </body>
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
