import React from 'react'

const NxtThemeContext = React.createContext({
  isDarkTheme: 'light',
  toggleTheme: () => {},
  savedVideos: [],
  addToSavedVideos: () => {},
})

export default NxtThemeContext
