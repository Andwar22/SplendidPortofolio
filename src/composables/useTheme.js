import { ref, watchEffect } from 'vue'

const THEME_KEY = 'theme'
const theme = ref(getInitialTheme())

function getInitialTheme() {
  try {
    return localStorage.getItem(THEME_KEY) || 'system'
  } catch {
    return 'system'
  }
}

function storeTheme(value) {
  try {
    localStorage.setItem(THEME_KEY, value)
  } catch { /* noop */ }
}

export function useTheme() {
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)')

  function applyTheme(value) {
    const next = ['light', 'dark', 'system'].includes(value) ? value : 'system'
    theme.value = next
    storeTheme(next)
    document.documentElement.dataset.theme = next
  }

  watchEffect(() => {
    document.documentElement.dataset.theme = theme.value
  })

  systemDark.addEventListener('change', () => {
    if (theme.value === 'system') applyTheme('system')
  })

  // Initialize on load
  applyTheme(theme.value)

  return { theme, applyTheme }
}
