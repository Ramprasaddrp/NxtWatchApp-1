import NxtThemeContext from '../../Context'
import {
  NoSearchResultsViewContainer,
  NoSearchResultsImage,
  ErrorMessage,
  FailureCause,
  RetryButton,
} from './StyledComponents'

const NoSearchResults = props => {
  const {onClickFunction} = props
  const onClickRetry = () => {
    onClickFunction()
  }
  return (
    <NxtThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <NoSearchResultsViewContainer>
            <NoSearchResultsImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <ErrorMessage theme={isDarkTheme}>
              No Search results found
            </ErrorMessage>
            <FailureCause theme={isDarkTheme}>
              Try different key words or remove search filter
            </FailureCause>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </NoSearchResultsViewContainer>
        )
      }}
    </NxtThemeContext.Consumer>
  )
}

export default NoSearchResults
