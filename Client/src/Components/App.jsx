import React from 'react';
import Header from './Header/Header.jsx';
import Home from './Home/Home.jsx';
import About from './About/About.jsx';
import Projects from './Projects/Projects.jsx';
import Resume from './Resume/Resume.jsx';
import Contact from './Contact/Contact';


import {
  BrowserRouter as Router,
  Route,
  Switch
       } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: ''
    };
    this.selectorfunction = this.selectorfunction.bind(this);
    this.selectedTab = this.selectedTab.bind(this);
  }

  selectorfunction (chosen) {
    console.log('ah')
    this.setState({selected: chosen})
  }

  selectedTab (tab) {
    console.log('tab', tab)
    this.setState({selected: tab})
  }

  render() {
    // console.log(this)
    return(
      <Router>

        <Header selected={this.state.selected} selectorfunction={this.selectorfunction}/>

        <Switch>

          <Route
          path="/"
          exact
          render={({match}) => <Home match={match} selectedTab={this.selectedTab}/>}
          />

          <Route
          path="/About"
          exact
          render={({match}) => <About match={match} selectedTab={this.selectedTab}/>}
          />

          <Route
          path="/Projects"
          exact
          render={({match}) => <Projects match={match} selectedTab={this.selectedTab}/>}
          />

          <Route
          path="/Resume"
          exact
          render={({match}) => <Resume match={match} selectedTab={this.selectedTab}/>}
          />

          <Route
          path="/Contact"
          exact
          render={({match}) => <Contact match={match} selectedTab={this.selectedTab}/>}
          />

          <Route
          path="/*"
          exact
          render={({match}) => <Home match={match} selectedTab={this.selectedTab}/>}
          />


        </Switch>
      </Router>

    )
  }
}

export default App;
