import {Component} from 'react'

import {Route, Redirect, Switch} from 'react-router-dom'
import NxtThemeContext from './Context'

import ProtectedRoute from './components/ProtectedRoute'

import Login from './components/Login'

import Home from './components/Home'

import VideoItemDetails from './components/VideoItemDetails'

import './App.css'
import NotFound from './components/NotFound'
import SavedVideos from './components/SavedVideos'
import TrendingVideos from './components/Trending'
import Gaming from './components/Gaming'

// custom hook to get the current pathname in React

// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: 'light',
    savedVideos: [],
  }

  addToSavedVideos = videoDetails => {
    const {savedVideos} = this.state
    const filterList = savedVideos.filter(
      eachItem => eachItem.id === videoDetails.id,
    )
    if (filterList.length !== 0) {
      const NewList = savedVideos.filter(
        eachItem => eachItem.id !== videoDetails.id,
      )
      this.setState({savedVideos: NewList})
    } else {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, videoDetails],
      }))
    }
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: prevState.isDarkTheme === 'dark' ? 'light' : 'dark',
    }))
  }

  render() {
    const {isDarkTheme, savedVideos} = this.state
    return (
      <NxtThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          addToSavedVideos: this.addToSavedVideos,
          savedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/trending" component={TrendingVideos} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </NxtThemeContext.Provider>
    )
  }
}

export default App
