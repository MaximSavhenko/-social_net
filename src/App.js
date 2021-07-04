import React from 'react';
import './App.scss';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from './components/Dialogs/Dialogs';

const App= () => {
  return (
    <div className='wrapper'>
      <Header/>
      <Sidebar/>
      <div className='app-wrapper-content'>
        <Dialogs/>
      </div>
      {/* <Profile/> */}
    </div>
  );
}

export default App;
