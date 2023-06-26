import styled from 'styled-components'

export const HomeContainer = styled.div`
  margin: 0px;
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
  font-family: 'Roboto';
`
export const SideBarAndContentContainer = styled.div`
  display: flex;
`
export const HomeContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  padding: 30px;
  display: ${props => (props.display === 'display' ? 'flex' : 'none')};
  justify-content: space-between;
`
export const BannerTextContainer = styled.div`
  width: 40vw;
  @media (max-width: 769px) {
    width: 70vw;
  }
`
export const WebSiteLogo = styled.img`
  width: 150px;
  @media (max-width: 769px) {
    width: 100px;
  }
`
export const BannerText = styled.p`
  font-size: 18px;
  color: #000000;
  font-weight: 400;
`
export const GetButton = styled.button`
  background-color: transparent;
  color: #000000;
  border: 1px solid #000000;
  padding: 8px 16px 8px 16px;
  font-size: 16px;
`
export const CloseIcon = styled.button`
  color: '#000000';
  font-size: 20px;
  border: none;
  background-color: transparent;
  align-self: flex-start;
  cursor: pointer;
`
export const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
`
export const SearchContainer = styled.div`
  display: flex;
  margin: 20px;
`
export const SearchInputElement = styled.input`
  outline: none;
  border: 1px solid ${props => (props.theme === 'dark' ? '#606060' : '#cccccc')};
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  background-color: ${props =>
    props.theme === 'dark' ? 'transparent' : '#ffffff'};
  padding: 6px;
  font-size: 18px;
  width: 30vw;
  ::placeholder {
    color: ${props => (props.theme === 'dark' ? '#606060' : '#cccccc')};
    font-size: 16px;
    font-weight: 300;
    opacity: 0.5;
  }
  @media (max-width: 769px) {
    width: 100%;
  }
`
export const SearchButton = styled.button`
  outline: none;
  border: 1px solid ${props => (props.theme === 'dark' ? '#606060' : '#cccccc')};
  border-left: none;
  background-color: ${props =>
    props.theme === 'dark' ? '#313131' : '#f9f9f9'};
  color: ${props => (props.theme === 'dark' ? '#606060' : '#909090')};
  padding: 6px 16px 6px 16px;
  font-size: 18px;
  cursor: pointer;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
`

export const HomeVideosContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  margin-right: 20px;
`
