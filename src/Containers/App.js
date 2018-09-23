import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { request, AuthenticationService } from '../Helpers'
import HeaderNav from '../Components/HeaderNav'
import Footer from '../Components/Footer'
import VolunteerSignup from '../Components/volunteerComponents/VolunteerSignup'

import Home from './Home'

//CSS
import '../CSS/App.css';

class App extends Component {
  render(){
    return (
      <div>
        <HeaderNav />
        <VolunteerSignup />
        {/* <BrowserRouter>
          <div>
            <Switch>
              <Route exact path='/' component={ Home } />
            </Switch>
          </div>
        </BrowserRouter> */}
        <Footer />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
export default connect(null, mapDispatchToProps)(App)
