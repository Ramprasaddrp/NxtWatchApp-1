import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import NxtThemeContext from '../../Context'
import {
  TrendingVideosContainer,
  SideBarAndContentContainer,
  TrendingVideosContentContainer,
  TrendingVideosBanner,
  TrendingLogoContainer,
  TrendingTitle,
  TrendingVideosList,
} from './StyledComponents'

import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'
import LoaderBox from '../LoaderBox'
import FailureView from '../FailureView'

const apiStatus = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class TrendingVideos extends Component {
  state = {trendingVideos: [], status: apiStatus.loading}

  componentDidMount() {
    this.getTrendingVideos()
  }

  updateData = data => ({
    channel: {
      name: data.channel.name,
      profileImageUrl: data.channel.profile_image_url,
    },
    id: data.id,
    publishedAt: data.published_at,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    viewCount: data.view_count,
  })

  getTrendingVideos = async () => {
    this.setState({status: apiStatus.loading})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const url = 'https://apis.ccbp.in/videos/trending'
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const fetchedData = data.videos.map(eachItem => this.updateData(eachItem))
      this.setState({status: apiStatus.success, trendingVideos: fetchedData})
    } else {
      this.setState({status: apiStatus.failure})
    }
  }

  switchRender = theme => {
    const {trendingVideos, status} = this.state
    switch (status) {
      case 'LOADING':
        return <LoaderBox />
      case 'SUCCESS':
        return (
          <TrendingVideosContentContainer>
            <TrendingVideosBanner data-testid="banner" theme={theme}>
              <TrendingLogoContainer theme={theme}>
                <HiFire />
              </TrendingLogoContainer>
              <TrendingTitle theme={theme}>Trending Videos</TrendingTitle>
            </TrendingVideosBanner>
            <TrendingVideosList>
              {trendingVideos.map(eachItem => (
                <VideoItem key={eachItem.id} details={eachItem} />
              ))}
            </TrendingVideosList>
          </TrendingVideosContentContainer>
        )
      case 'FAILURE':
        return (
          <FailureView
            text="We are having some trouble"
            onClickFunction={() => this.getTrendingVideos()}
          />
        )
      default:
        return null
    }
  }

  render() {
    return (
      <NxtThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <TrendingVideosContainer theme={isDarkTheme} data-testid="trending">
              <Header />
              <SideBarAndContentContainer>
                <SideBar />
                {this.switchRender(isDarkTheme)}
              </SideBarAndContentContainer>
            </TrendingVideosContainer>
          )
        }}
      </NxtThemeContext.Consumer>
    )
  }
}
export default TrendingVideos
