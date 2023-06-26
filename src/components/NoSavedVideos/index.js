import NxtThemeContext from '../../Context'
import {
  NoSavedVideosContainer,
  NoSavedVideosImage,
  ErrorMessage,
  NoSavedVideosCause,
} from './StyledComponents'

const NoSavedVideos = () => (
  <NxtThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <NoSavedVideosContainer>
          <NoSavedVideosImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <ErrorMessage theme={isDarkTheme}>No Saved Videos found</ErrorMessage>
          <NoSavedVideosCause theme={isDarkTheme}>
            You can save your videos while watching theme
          </NoSavedVideosCause>
        </NoSavedVideosContainer>
      )
    }}
  </NxtThemeContext.Consumer>
)

export default NoSavedVideos
