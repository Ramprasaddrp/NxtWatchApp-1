import styled from 'styled-components'

export const SideNavItem = styled.li`
  flex-grow: 1;
  padding: 5px 5px 5px 15px;
  display: flex;
  align-items: center;
  font-weight: ${props => (props.active === 'active' ? '600' : '400')};
  background-color: ${props => {
    if (props.active === 'active') {
      const a = props.theme === 'dark' ? '#909090' : '#d7dfe9'
      return a
    }
    return 'transparent'
  }};
  color: ${props => {
    if (props.active === 'active') {
      return '#ff0000'
    }
    const a = props.theme === 'dark' ? '#909090' : '#606060'
    return a
  }};
  font-size: 20px;
  @media (max-height: 769px) {
    font-size: 16px;
  }
`
export const NavItemText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  padding: 0px;
  margin: 10px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  @media (max-height: 769px) {
    font-size: 12px;
  }
`
