// Theme resolver for runtime theme switching
const THEME = process.env.THEME || 'base'

export const resolveThemePath = (modulePath) => {
  // Convert @theme/* paths to themes/${THEME}/*
  if (modulePath.startsWith('@theme/')) {
    const relativePath = modulePath.replace('@theme/', '')
    return `themes/${THEME}/${relativePath}`
  }
  return modulePath
}

// Export a proxy module that resolves theme imports
export const createThemePath = (path) => `@theme/${path}`
