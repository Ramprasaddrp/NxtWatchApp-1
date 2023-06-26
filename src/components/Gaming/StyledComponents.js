import styled from 'styled-components'

export const GamesContainer = styled.div`
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
export const GamesContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
export const GamesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 50px;
  @media (max-width: 769px) {
    padding: 20px;
  }
`
