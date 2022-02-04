import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import ThemeContext from './context/ThemeContext'

import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'

import SpecificState from './components/SpecificState'

import './App.css'

class App extends Component {
  state = {isDarkTheme: false}

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/state/:stateCode" component={SpecificState} />

          <Route to="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
