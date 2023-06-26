import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoMdClose} from 'react-icons/io'
import {AiOutlineSearch} from 'react-icons/ai'
import NxtThemeContext from '../../Context'
import LoaderBox from '../LoaderBox'
import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'
import NoSearchResults from '../NoSearchResults'
import VideoThumbnail from '../VideoThumbnail'
import {
  HomeContainer,
  SideBarAndContentContainer,
  HomeContentContainer,
  BannerContainer,
  WebSiteLogo,
  BannerText,
  BannerTextContainer,
  GetButton,
  CloseIcon,
  MainContentContainer,
  SearchContainer,
  SearchInputElement,
  SearchButton,
  HomeVideosContainer,
} from './StyledComponents'

const apiStatus = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    display: true,
    status: apiStatus.loading,
    searchInput: '',
    homeVideosList: [],
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
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

  getHomeVideos = async () => {
    const {searchInput} = this.state
    this.setState({status: apiStatus.loading})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const response = await fetch(url, options)
    const fetchData = await response.json()
    if (response.ok) {
      const updatedData = fetchData.videos.map(eachItem =>
        this.updateData(eachItem),
      )
      this.setState({homeVideosList: updatedData, status: apiStatus.success})
    } else {
      this.setState({status: apiStatus.failure})
    }
  }


  closeBanner = () => {
    this.setState({display: false})
  }

  renderVideos = () => {
    const {homeVideosList} = this.state
    const noOfVideos = homeVideosList.length
    return (
      <div>
        {noOfVideos === 0 ? (
          <NoSearchResults onClickFunction={this.RetryRendering} />
        ) : (
          <HomeVideosContainer>
            {homeVideosList.map(eachItem => (
              <VideoThumbnail key={eachItem.id} details={eachItem} />
            ))}
          </HomeVideosContainer>
        )}
      </div>
    )
  }

  RetryRendering = () => {
    this.getHomeVideos()
  }

  renderSwitch = () => {
    const {status} = this.state
    switch (status) {
      case 'LOADING':
        return <LoaderBox />
      case 'SUCCESS':
        return this.renderVideos()
      case 'FAILURE':
        return (
          <FailureView
            text="We are having some trouble"
            onClickFunction={this.RetryRendering}
          />
        )
      default:
        return null
    }
  }

  render() {
    const {display, searchInput} = this.state
    return (
      <NxtThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <HomeContainer theme={isDarkTheme} data-testid="home">
              <Header />
              <SideBarAndContentContainer>
                <SideBar />
                <HomeContentContainer>
                  <BannerContainer
                    data-testid="banner"
                    display={display ? 'display' : ''}
                  >
                    <BannerTextContainer>
                      <WebSiteLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerText>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerText>
                      <GetButton type="button">GET IT NOW</GetButton>
                    </BannerTextContainer>
                    <CloseIcon
                      data-testid="close"
                      type="button"
                      onClick={this.closeBanner}
                    >
                      <IoMdClose />
                    </CloseIcon>
                  </BannerContainer>
                  <MainContentContainer>
                    <SearchContainer>
                      <SearchInputElement
                        theme={isDarkTheme}
                        type="search"
                        placeholder="Search"
                        value={searchInput}
                        onChange={this.onChangeSearchInput}
                      />
                      <SearchButton
                        data-testid="searchButton"
                        theme={isDarkTheme}
                        type="button"
                        onClick={()=> this.getHomeVideos()}
                      >
                        <AiOutlineSearch />
                      </SearchButton>
                    </SearchContainer>
                    {this.renderSwitch()}
                  </MainContentContainer>
                </HomeContentContainer>
              </SideBarAndContentContainer>
            </HomeContainer>
          )
        }}
      </NxtThemeContext.Consumer>
    )
  }
}
export default Home
