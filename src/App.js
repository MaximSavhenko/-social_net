import React from 'react'
import './App.scss'
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import { Route } from 'react-router-dom'

const App= (props) => {
  return (
      <div className='wrapper'>
        <Header/>
        <Sidebar state = {props.state.FriendList}/>
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() =>  <Profile state = {props.state.profilePage}/>}/>
          <Route path='/messages' render={() =>  <Dialogs state = { props.state.messagePage }/>}/>
          <Route path='/news' render={() =>  <News/>}/>
          <Route path='/music' render={() =>  <Music/>}/>
          <Route path='/settings' render={ () =>  <Settings/>}/>
        </div>
      </div>
  );
}

export default App;
