import React from 'react';
import Header from './Header/Header.jsx';
import Home2 from './Home2'
import Home from './Home'


import {
  BrowserRouter as Router,
  Route,
  Switch
       } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return(
      <Router>

        <Header/>

        <Switch>
          <Route path="/" component={Home} exact/>

          <Route path="/Home2" component={Home2} exact/>

        </Switch>
      </Router>
      // <div>
      //   <div className='test'> First Page content </div>
      // </div>

    )
  }
}

export default App;
