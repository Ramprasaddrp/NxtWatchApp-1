import styled from 'styled-components'

export const Video = styled.li`
  display: flex;
  margin-bottom: 50px;
  @media (max-width: 769px) {
    flex-direction: column;
    margin-bottom: 15px;
  }
`

export const VideoThumbnailImage = styled.img`
  width: 400px;
  height: 210px;
  margin-right: 20px;
  @media (max-width: 769px) {
    width: 100%;
  }
`
export const VideoDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  @media (max-width: 769px) {
    width: 100%;
  }
`

export const ViewsAndTimeContainer = styled.div`
  display: flex;
  margin: 0px;
  align-items: center;
`
