import NxtThemeContext from '../../Context'
import {SideNavItem, NavItemText} from './StyledComponents'

const NavItem = props => {
  const {details} = props
  const active = window.location.pathname === details.path ? 'active' : ''
  return (
    <NxtThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <SideNavItem theme={isDarkTheme} active={active}>
            <details.logo />
            <NavItemText theme={isDarkTheme}>{details.text}</NavItemText>
          </SideNavItem>
        )
      }}
    </NxtThemeContext.Consumer>
  )
}

export default NavItem
