import styled from 'styled-components'

export const Container = styled.div`
  margin: 0px;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
`
export const SideBarAndContentContainer = styled.div`
  display: flex;
  height: 91vh;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
`

export const NotFoundImage = styled.img`
  width: 40%;
  padding: 20px;
`
export const NotFoundMessage = styled.h1`
  font-size: 20px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
`
export const NotFoundCause = styled.p`
  font-size: 18px;
  color: ${props => (props.theme === 'dark' ? '#94a3b8' : '#64748b')};
`
