import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {CgPlayListAdd} from 'react-icons/cg'
import {SiYoutubegaming} from 'react-icons/si'
import NxtThemeContext from '../../Context'

import NavItem from '../NavItem'
import {
  SideBarContainer,
  SideNavBar,
  Heading,
  ContactIcons,
  Icon,
  Description,
} from './StyledComponents'

const sideNavList = [
  {id: 1, logo: AiFillHome, path: '/', text: 'Home'},
  {id: 2, logo: HiFire, path: '/trending', text: 'Trending'},
  {id: 3, logo: SiYoutubegaming, path: '/gaming', text: 'Gaming'},
  {
    id: 4,
    logo: CgPlayListAdd,
    path: '/saved-videos',
    text: 'Saved Videos',
  },
]

const SideBar = () => (
  <NxtThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <SideBarContainer theme={isDarkTheme}>
          <li>
            <SideNavBar>
              {sideNavList.map(eachItem => (
                <Link
                  key={eachItem.id}
                  style={{textDecoration: 'none'}}
                  to={eachItem.path}
                >
                  <NavItem details={eachItem} />
                </Link>
              ))}
            </SideNavBar>
          </li>
          <li>
            <SideNavBar as="div">
              <Heading theme={isDarkTheme}>CONTACT US</Heading>
              <ContactIcons>
                <Icon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <Icon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <Icon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </ContactIcons>
              <Description theme={isDarkTheme}>
                Enjoy! Now to see your channels and recommendations!
              </Description>
            </SideNavBar>
          </li>
        </SideBarContainer>
      )
    }}
  </NxtThemeContext.Consumer>
)

export default SideBar
