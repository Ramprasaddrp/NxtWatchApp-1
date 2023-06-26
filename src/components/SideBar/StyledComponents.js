import styled from 'styled-components'

export const SideBarContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 89vh;
  margin: 0px;
  padding: 0px;
  background-color: ${props =>
    props.theme === 'dark' ? '#313131' : '#ffffff'};
  @media (max-width: 769px) {
    display: none;
  }
`
export const SideNavBar = styled.ul`
  width: 16vw;
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0px;
`
export const Heading = styled.p`
  font-size: 20px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  padding: 20px;
  margin: 0px;
  @media (max-height: 769px) {
    font-size: 16px;
  }
`
export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
  padding-left: 18px;
`
export const Icon = styled.img`
  width: 40px;
  padding-right: 10px;
`

export const Description = styled.p`
  margin: 0px;
  width: 70%;
  font-size: 14px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  padding: 10px 10px 20px 20px;
  font-weight: 500;
  @media (max-height: 769px) {
    font-size: 10px;
  }
`
