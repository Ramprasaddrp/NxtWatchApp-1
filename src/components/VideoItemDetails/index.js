import {Component} from 'react'

import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'

import {VscCircleFilled} from 'react-icons/vsc'
import {BiDislike, BiLike} from 'react-icons/bi'
import {CgPlayListAdd} from 'react-icons/cg'

import SideBar from '../SideBar'
import Header from '../Header'
import LoaderBox from '../LoaderBox'
import FailureView from '../FailureView'

import NxtThemeContext from '../../Context'
import {
  VideoItemDetailsContainer,
  VideoItemAndSideBar,
  VideoContainer,
  Video,
  SmallContainer,
  HorizontalLine,
  LikeButton,
  ChannelLogo,
  Description,
} from './StyledComponents'
import {Name, Title} from '../VideoThumbnail/StyledComponents'

const apiStatus = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    status: apiStatus.loading,
    like: '',
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  toggleLike = () => {
    this.setState({like: 'like'})
  }

  toggleDisLike = () => {
    this.setState({like: 'disLike'})
  }

  getVideoDetails = async () => {
    this.setState({status: apiStatus.loading})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    console.log(url)
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const fetchedData = data.video_details
    if (response.ok) {
      const updatedData = {
        channel: {
          name: fetchedData.channel.name,
          profileImageUrl: fetchedData.channel.profile_image_url,
          subscriberCount: fetchedData.channel.subscriber_count,
        },
        description: fetchedData.description,
        id: fetchedData.id,
        publishedAt: fetchedData.published_at,
        thumbnailUrl: fetchedData.thumbnail_url,
        title: fetchedData.title,
        videoUrl: fetchedData.video_url,
        viewCount: fetchedData.view_count,
      }
      this.setState({
        videoDetails: updatedData,
        status: apiStatus.success,
      })
    } else {
      this.setState({status: apiStatus.failure})
    }
  }

  renderVideo = (theme, savedVideos, addToSavedVideos) => {
    const {videoDetails, like} = this.state
    const isSavedVideo = savedVideos.filter(
      eachItem => videoDetails.id === eachItem.id,
    )
    console.log(isSavedVideo)
    const save = isSavedVideo.length === 0 ? 'Save' : 'Saved'
    const isLiked = like === 'like' ? 'active' : ''
    const isDisLiked = like === 'disLike' ? 'active' : ''
    console.log(save)
    const onClickSave = () => {
      addToSavedVideos(videoDetails)
    }
    return (
      <VideoContainer theme={theme}>
        <Video>
          <ReactPlayer
            width="100%"
            height="100%"
            url={videoDetails.videoUrl}
            controls
          />
        </Video>
        <Title theme={theme}>{videoDetails.title}</Title>
        <SmallContainer spaceBetween>
          <SmallContainer>
            <Name>{videoDetails.viewCount} views</Name>
            <Name dot>
              <VscCircleFilled />
            </Name>
            <Name>{videoDetails.publishedAt}</Name>
          </SmallContainer>
          <SmallContainer>
            <LikeButton onClick={this.toggleLike} like={isLiked} type="button">
              <BiLike />
              Like
            </LikeButton>
            <LikeButton
              onClick={this.toggleDisLike}
              like={isDisLiked}
              type="button"
            >
              <BiDislike />
              DisLike
            </LikeButton>
            <LikeButton onClick={onClickSave} save={save} type="button">
              <CgPlayListAdd />
              {save}
            </LikeButton>
          </SmallContainer>
        </SmallContainer>
        <HorizontalLine />
        <SmallContainer>
          <ChannelLogo
            src={videoDetails.channel.profileImageUrl}
            alt="channel logo"
          />
          <SmallContainer column>
            <Title theme={theme}>{videoDetails.channel.name}</Title>
            <Name theme={theme}>
              {videoDetails.channel.subscriberCount} Subscribers
            </Name>
            <Description theme={theme}>{videoDetails.description}</Description>
          </SmallContainer>
        </SmallContainer>
      </VideoContainer>
    )
  }

  switchRender = (theme, savedVideos, addToSavedVideos) => {
    const {status} = this.state
    switch (status) {
      case 'LOADING':
        return <LoaderBox />
      case 'SUCCESS':
        return this.renderVideo(theme, savedVideos, addToSavedVideos)
      case 'FAILURE':
        return (
          <FailureView
            text="We are having some trouble to complete your request. Please try again."
            onClickFunction={() => this.getVideoDetails()}
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
          const {isDarkTheme, savedVideos, addToSavedVideos} = value
          return (
            <VideoItemDetailsContainer
              data-testid="videoItemDetails"
              theme={isDarkTheme}
            >
              <Header />
              <VideoItemAndSideBar>
                <SideBar />
                {this.switchRender(isDarkTheme, savedVideos, addToSavedVideos)}
              </VideoItemAndSideBar>
            </VideoItemDetailsContainer>
          )
        }}
      </NxtThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
