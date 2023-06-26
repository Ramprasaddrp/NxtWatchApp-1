import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  margin: 0px;
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  font-family: 'Roboto';
`
export const SideBarAndContentContainer = styled.div`
  display: flex;
`
export const SavedVideosContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
