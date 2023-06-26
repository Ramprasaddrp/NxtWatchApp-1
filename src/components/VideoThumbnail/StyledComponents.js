import styled from 'styled-components'

export const ThumbnailImage = styled.img`
  width: 100%;
`
export const ThumbnailContainer = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0px 20px 20px;
  width: 33%;
  @media (max-width: 769px) {
    width: 100%;
  }
`
export const ThumbnailTextContainer = styled.div`
  display: flex;
  margin: 10px 0px 0px 0px;
`
export const ChannelLogo = styled.img`
  width: 50px;
  height: 50px;
`

export const Title = styled.p`
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#212121')};
  font-size: 16px;
  margin: 10px 10px 0px 0px;
  @media (max-width: 769px) {
    font-size: 12px;
  }
`

export const Name = styled.p`
  color: ${props => (props.theme === 'dark' ? '#94a3b8' : '#64748b')};
  font-size: ${props => (props.dot ? '12px' : '16px')};
  margin: 10px 10px 0px 0px;
  @media (max-width: 769px) {
    font-size: ${props => (props.dot ? '8px' : '12px')};
  }
`
export const ViewsAndTimeContainer = styled.div`
  display: flex;
  margin: 0px;
  align-items: center;
`
