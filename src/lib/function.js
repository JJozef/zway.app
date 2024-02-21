import { encode, decode } from 'js-base64'

/**
 * - Generate the HTML
 * @param {string} html
 * @param {string} css
 * @param {string} javascript
 * @returns {string} The HTML string
 */

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

/**
 * - Generate a hashed URL
 * @param {string} html
 * @param {string} css
 * @param {string} javascript
 * @returns {string} The hashed URL
 */

export function GenerateURLHashed({ html, css, javascript }) {
  return `${encode(html || '')}|${encode(css || '')}|${encode(javascript || '')}`
}

/**
 * - Decode the URL
 * @param {string} encoded
 * @returns {string} The decoded URL
 */

export function DecodeURLHashed(encoded) {
  if (!encoded) return ''
  return decode(encoded)
}

/**
 * - Replace the current state with a new state
 * @param {string} url
 * @returns {void}
 */

export const ReplaceStateURL = (url) => {
  return window.history.replaceState(
    { ...window.history.state, as: url, url },
    '',
    url
  )
}
