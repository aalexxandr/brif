import { BrowserRouter } from 'react-router-dom';
import './App.css'
import NavbarContainer from './components/Navbar/NavbarContainer'
import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer'
import { auth } from './utils/firebaseInit'
import Loader from './components/Loader/Loader';
import AppRoutes from './components/AppRoutes';

const App = (props) => {
  const [user] = useAuthState(auth)

  useEffect(({initializeApp} = props) => {
    initializeApp(user)
  })

  return props.initial ? 
  <Loader /> :
  <BrowserRouter>
    <NavbarContainer />
    <AppRoutes />
  </BrowserRouter>
    
}

const mapStateToProps = (state) => ({
  initial: state.app.initial
})

export default connect(mapStateToProps, { initializeApp })(App);