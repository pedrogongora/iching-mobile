export const saveTheme = theme => {
  window.localStorage.setItem('theme', theme)
  return theme
}

export const getTheme = () => window.localStorage.getItem('theme')
