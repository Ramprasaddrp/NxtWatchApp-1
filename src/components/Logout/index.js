import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {Popup} from 'reactjs-popup'
import NxtThemeContext from '../../Context'
import {
  LogoutButton,
  ModalContainer,
  ModalButton,
  ModalText,
} from './StyledComponents'

const Logout = props => (
  <NxtThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const redirectToLoginPage = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      return (
        <Popup
          modal
          trigger={
            <LogoutButton type="button" theme={isDarkTheme}>
              Logout
            </LogoutButton>
          }
        >
          {close => (
            <ModalContainer theme={isDarkTheme}>
              <ModalText theme={isDarkTheme}>
                Are you sure, you want to logout
              </ModalText>
              <ModalButton onClick={() => close()} type="button">
                Cancel
              </ModalButton>
              <ModalButton
                fill="fill"
                onClick={redirectToLoginPage}
                type="button"
              >
                Confirm
              </ModalButton>
            </ModalContainer>
          )}
        </Popup>
      )
    }}
  </NxtThemeContext.Consumer>
)

export default withRouter(Logout)
