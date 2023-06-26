import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
`

export const VideoItemAndSideBar = styled.div`
  display: flex;
`

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
`

export const Video = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30vw;
  @media (max-width: 769px) {
    height: 40vw;
  }
`

export const HorizontalLine = styled.hr`
  width: 100%;
  border-top: 1px solid
    ${props => (props.theme === 'dark' ? '#94a3b8' : '#64748b')};
  margin: 0px;
`
export const SmallContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  align-items: ${props => (props.column ? 'flex-start' : 'center')};
  margin: 0px;
  justify-content: ${props =>
    props.spaceBetween ? 'space-between' : 'flex-start'};
`
export const LikeButton = styled.button`
  color: ${props =>
    props.like === 'active' || props.save === 'Saved' ? '#2563eb' : '#64748b'};
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  padding: 10px 10px 0px 0px;
  align-items: center;
  @media (max-width: 769px) {
    font-size: 12px;
  }
`
export const ChannelLogo = styled.img`
  margin: 20px 20px 0px 0px;
  width: 60px;
  height: 60px;
  align-self: flex-start;
  @media (max-width: 769px) {
    width: 40px;
    height: 40px;
  }
`

export const Description = styled.p`
  color: ${props => (props.theme === 'dark' ? '#f1f5f9' : '#7e858e')};
  font-size: 20px;
  margin: 20px 0px 0px 0px;
  align-self: flex-start;
  @media (max-width: 769px) {
    font-size: 14px;
  }
`
