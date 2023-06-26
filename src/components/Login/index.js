import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import NxtThemeContext from '../../Context'

import {
  LoginContainer,
  LoginForm,
  NxtWedLogo,
  InputLabel,
  UserInput,
  CheckboxContainer,
  CheckboxLabel,
  InputCheckBox,
  LoginButton,
  ErrorMsg,
} from './StyledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    displayPassword: false,
    displayErrorMsg: false,
    errorMsg: '',
  }

  updateUsername = event => {
    this.setState({username: event.target.value})
  }

  updatePassword = event => {
    this.setState({password: event.target.value})
  }

  submitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  submitFailure = errorMsg => {
    this.setState({displayErrorMsg: true, errorMsg})
  }

  postLoginDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    console.log(password)
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.submitSuccess(data.jwt_token)
    } else {
      this.submitFailure(data.error_msg)
    }
  }

  togglePasswordDisplay = () => {
    this.setState(prevState => ({displayPassword: !prevState.displayPassword}))
  }

  render() {
    const {
      username,
      password,
      displayPassword,
      displayErrorMsg,
      errorMsg,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <LoginContainer
              theme={isDarkTheme}
              onSubmit={this.postLoginDetails}
            >
              <LoginForm theme={isDarkTheme}>
                <NxtWedLogo
                  src={
                    isDarkTheme === 'dark'
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <InputLabel theme={isDarkTheme} htmlFor="user_name">
                  USERNAME
                </InputLabel>
                <UserInput
                  theme={isDarkTheme}
                  type="text"
                  id="user_name"
                  onChange={this.updateUsername}
                  value={username}
                  placeholder="Username"
                />
                <InputLabel theme={isDarkTheme} htmlFor="password">
                  PASSWORD
                </InputLabel>
                <UserInput
                  theme={isDarkTheme}
                  type={displayPassword ? 'text' : 'password'}
                  id="password"
                  onChange={this.updatePassword}
                  value={password}
                  placeholder="Password"
                />
                <CheckboxContainer>
                  <InputCheckBox
                    id="show-password"
                    type="checkbox"
                    onClick={this.togglePasswordDisplay}
                  />
                  <CheckboxLabel theme={isDarkTheme} htmlFor="show-password">
                    Show Password
                  </CheckboxLabel>
                </CheckboxContainer>
                <LoginButton type="submit">Login</LoginButton>
                {displayErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </LoginForm>
            </LoginContainer>
          )
        }}
      </NxtThemeContext.Consumer>
    )
  }
}

export default Login
