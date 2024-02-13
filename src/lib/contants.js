export const EDITOR_OPTIONS = [
  'fontFamily',
  'tabSize',
  'fontSize',
  'lineNumbers',
  'minimap',
  'theme',
  'wordWrap',
  'fontLigatures'
]

export const EDITOR_LAYOUTS = {
  boxes: 'boxes',
  tabs: 'tabs'
}

export const DEFAULT_EDITOR_STATE = {
  fontFamily:
    "'Cascadia Code PL', 'Menlo', 'Monaco', 'Courier New', 'monospace'",
  automaticLayout: true,
  fixedOverflowWidgets: true,
  scrollBeyondLastLine: false,
  roundedSelection: false,
  padding: { top: 16, left: 0, right: 0, bottom: 0 },
  dragAndDrop: true
}

export const DEFAULT_EDITOR_STORAGE_STATE = {
  tabSize: 2,
  fontSize: 18,
  lineNumbers: 'off',
  minimap: false,
  theme: 'vs-dark',
  wordWrap: 'on',
  fontLigatures: true,
  zipFileName: 'zway.app',
  saveLocalstorage: true,
  layoutEditors: EDITOR_LAYOUTS.boxes
}
