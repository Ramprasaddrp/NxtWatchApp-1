import styled from 'styled-components'

export const LogoutButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  padding: 5px 10px 5px 10px;
  font-size: 14px;
  border-radius: 3px;
  border: 1px solid ${props => (props.theme === 'dark' ? '#ffffff' : '#3b82f6')};
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#3b82f6')};
`

export const LogoutIcon = styled.li`
  color: ${props => (props.theme === 'dark' ? '#0f0f0f' : '#ffffff')};
  font-size: 20px;
  @media (min-width: 768px) {
    display: none;
  }
`

export const ModalContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#383838' : '#ffffff'};
  border-radius: 10px;
  padding: 10px;
  text-align: center;
`

export const ModalText = styled.p`
  font-size: 18px;
  color: ${props => (props.theme === 'dark' ? '#f4f4f4' : '#00306e')};
  margin: 20px;
`
export const ModalButton = styled.button`
  background-color: ${props => (props.fill ? '#3b82f6' : 'transparent')};
  color: ${props => (props.fill ? '#ffffff' : '#cccccc')};
  border: ${props => (props.fill ? 'none' : '1px solid #cccccc')};
  border-radius: 1px;
  margin: 10px;
  padding: 5px 10px 5px 10px;
  font-size: 14px;
  cursor: pointer;
`
