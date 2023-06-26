import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.theme === 'dark' ? '#383838' : '#f8fafc'};
  height: 100vh;
  font-family: 'Roboto';
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 370px;
  box-shadow: 0px 0px 3px 1px #606060;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#ffffff'};
  border-radius: 10px;
  padding: 30px;
`

export const NxtWedLogo = styled.img`
  width: 150px;
  padding: 10px;
  align-self: center;
`

export const InputLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#94a3b8')};
  padding-top: 30px;
`

export const UserInput = styled.input`
  outline: none;
  border: 1px solid #64748b;
  border-radius: 3px;
  background-color: transparent;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#0f0f0f')};
  padding: 6px;
  font-size: 18px;
  margin: 5px 5px 5px 0px;
  ::placeholder {
    color: '#94a3b8';
    font-size: 16px;
    font-weight: 300;
    opacity: 0.5;
  }
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`

export const InputCheckBox = styled.input`
  zoom: 1.2;
  margin-right: 10px;
`

export const CheckboxLabel = styled.label`
  font-size: 16px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#181818')};
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  margin-top: 40px;
  margin-bottom: 0px;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  color: #ff0000;
  font-size: 12px;
  margin: 0px;
`
