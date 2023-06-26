import NxtThemeContext from '../../Context'
import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundMessage,
  NotFoundCause,
  Container,
  SideBarAndContentContainer,
} from './StyledComponents'
import Header from '../Header'
import SideBar from '../SideBar'

const NotFound = () => (
  <NxtThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <Container>
          <Header />
          <SideBarAndContentContainer theme={isDarkTheme}>
            <SideBar />
            <NotFoundContainer theme={isDarkTheme}>
              <NotFoundImage
                src={
                  isDarkTheme === 'dark'
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
              />
              <NotFoundMessage theme={isDarkTheme}>
                Page Not Found
              </NotFoundMessage>
              <NotFoundCause theme={isDarkTheme}>
                We are sorry, the page you requested could not be found.
              </NotFoundCause>
            </NotFoundContainer>
          </SideBarAndContentContainer>
        </Container>
      )
    }}
  </NxtThemeContext.Consumer>
)

export default NotFound
