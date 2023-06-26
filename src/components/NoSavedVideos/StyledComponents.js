import styled from 'styled-components'

export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 91vh;
  width: 100%;
`

export const NoSavedVideosImage = styled.img`
  width: 40%;
  padding: 20px;
`
export const ErrorMessage = styled.h1`
  font-size: 20px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
`
export const NoSavedVideosCause = styled.p`
  font-size: 18px;
  color: ${props => (props.theme === 'dark' ? '#94a3b8' : '#64748b')};
`
