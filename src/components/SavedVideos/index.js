import {HiFire} from 'react-icons/hi'
import NxtThemeContext from '../../Context'
import {
  SavedVideosContainer,
  SideBarAndContentContainer,
  SavedVideosContentContainer,
} from './StyledComponents'

import Header from '../Header'
import SideBar from '../SideBar'
import NoSavedVideos from '../NoSavedVideos'
import VideoItem from '../VideoItem'
import {
  TrendingVideosBanner,
  TrendingLogoContainer,
  TrendingTitle,
  TrendingVideosList,
} from '../Trending/StyledComponents'

const SavedVideos = () => (
  <NxtThemeContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      return (
        <SavedVideosContainer theme={isDarkTheme} data-testid="savedVideos">
          <Header />
          <SideBarAndContentContainer>
            <SideBar />
            {savedVideos.length === 0 ? (
              <NoSavedVideos />
            ) : (
              <SavedVideosContentContainer>
                <TrendingVideosBanner data-testid="banner" theme={isDarkTheme}>
                  <TrendingLogoContainer theme={isDarkTheme}>
                    <HiFire />
                  </TrendingLogoContainer>
                  <TrendingTitle theme={isDarkTheme}>
                    Saved Videos
                  </TrendingTitle>
                </TrendingVideosBanner>
                <TrendingVideosList>
                  {savedVideos.map(eachItem => (
                    <VideoItem key={eachItem.id} details={eachItem} />
                  ))}
                </TrendingVideosList>
              </SavedVideosContentContainer>
            )}
          </SideBarAndContentContainer>
        </SavedVideosContainer>
      )
    }}
  </NxtThemeContext.Consumer>
)
export default SavedVideos
