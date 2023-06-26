import {Link} from 'react-router-dom'
import {VscCircleFilled} from 'react-icons/vsc'
import NxtThemeContext from '../../Context'
import {
  ThumbnailContainer,
  ThumbnailImage,
  ThumbnailTextContainer,
  ChannelLogo,
  Title,
  Name,
  ViewsAndTimeContainer,
} from './StyledComponents'

const VideoThumbnail = props => {
  const {details} = props
  return (
    <NxtThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <ThumbnailContainer theme={isDarkTheme}>
            <Link style={{textDecoration: 'none'}} to={`/videos/${details.id}`}>
              <ThumbnailImage
                src={details.thumbnailUrl}
                alt="video thumbnail"
              />
              <ThumbnailTextContainer>
                <ChannelLogo
                  src={details.channel.profileImageUrl}
                  alt="channel logo"
                />
                <div>
                  <Title theme={isDarkTheme}>{details.title}</Title>
                  <Name theme={isDarkTheme}>{details.channel.name}</Name>
                  <ViewsAndTimeContainer>
                    <Name theme={isDarkTheme}>{details.viewCount} views</Name>
                    <Name theme={isDarkTheme} dot as="div">
                      <VscCircleFilled />
                    </Name>
                    <Name theme={isDarkTheme}>{details.publishedAt}</Name>
                  </ViewsAndTimeContainer>
                </div>
              </ThumbnailTextContainer>
            </Link>
          </ThumbnailContainer>
        )
      }}
    </NxtThemeContext.Consumer>
  )
}
export default VideoThumbnail
