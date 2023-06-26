import styled from 'styled-components'

export const GameItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  padding: 10px;
  @media (max-width: 769px) {
    margin-bottom: 20px;
  }
`

export const GameThumbnailImage = styled.img`
  width: 250px;
  height: 300px;
  margin-right: 10px;
  @media (max-width: 769px) {
    width: 145px;
    height: 180px;
    margin-right: 10px;
  }
  @media (max-width: 576px) {
    width: 80vw;
    height: 400px;
    margin-right: 10px;
  }
`
