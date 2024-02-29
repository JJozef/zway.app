import { downloadZip } from 'client-zip'
import { DEFAULT_EDITOR_STORAGE_STATE as DESS } from './contants'
import { GenerateHTML } from './function'

/**
 * Download the code as a zip file.
 * @param {Object} params - The parameters.
 * @param {string} params.html - HTML code.
 * @param {string} params.css - CSS code.
 * @param {string} params.javascript - JavaScript code.
 * @param {string} params.zipFileName - The name of the zip file.
 * @param {Object} params.files - The files to include in the zip file.
 */
export async function downloadMyCode({
  html,
  css,
  javascript,
  zipFileName,
  files = {}
}) {
  const {
    html: includeHTML = false,
    css: includeCSS = false,
    js: includeJS = false,
    singleFile = false
  } = files
  const fileName = zipFileName || DESS.zipFileName

  const zipBlob = await getFileToDownload({
    html,
    css,
    javascript,
    includeHTML,
    includeCSS,
    includeJS,
    singleFile
  })

  try {
    generateZip({ zipBlob, zipFileName: fileName })
  } catch (error) {
    console.error('Error al generar el archivo ZIP:', error)
  }
}

async function getFileToDownload({
  html,
  css,
  javascript,
  includeHTML,
  includeCSS,
  includeJS,
  singleFile
}) {
  if (singleFile) {
    return await createZipWithSingleFile({ html, css, javascript })
  }

  const filesToDownload = []

  const indexHtml = generateTemplateHTML({
    html,
    css,
    javascript,
    includeCSS,
    includeJS
  })

  if (includeHTML) {
    filesToDownload.push({ name: 'index.html', input: indexHtml })
  }

  if (includeCSS) {
    filesToDownload.push({ name: 'style.css', input: css })
  }
  if (includeJS) {
    filesToDownload.push({ name: 'script.js', input: javascript })
  }

  return await downloadZip(filesToDownload).blob()
}

async function createZipWithSingleFile({ html, css, javascript }) {
  const indexHTML = GenerateHTML({ html, css, javascript })
  return await downloadZip([{ name: 'index.html', input: indexHTML }]).blob()
}

function generateZip({ zipBlob, zipFileName }) {
  const el = document.createElement('a')
  el.href = URL.createObjectURL(zipBlob)
  el.download = `${zipFileName}.zip`
  el.click()
  el.remove()
}
function generateTemplateHTML({
  html,
  css,
  javascript,
  includeCSS,
  includeJS
}) {
  const title = '<title>zway.app - My Code</title>'
  const head = `<head>${title}${css || includeCSS ? '<link rel="stylesheet" href="style.css">' : ''}</head>`
  const body = `<body>${html || ''}${javascript || includeJS ? '<script src="script.js"></script>' : ''}</body>`
  return `<!DOCTYPE html><html lang="en">${head}${body}</html>`
}
