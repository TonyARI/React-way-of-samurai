import './App.css';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';






function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wraper">
          <HeaderContainer/>
          <Nav />
        <div className='app-wraper-content'>
         <Routes>
             <Route path="/dialogs/*" element={<DialogsContainer/>}/> 
             <Route path="/profile/:userId" element={<Profile/>}/>
             <Route path="/profile/" element={<Profile/>}/> 
             <Route path='/news' element={<News/>}/>
            <Route path='/music' element={<Music/>}/>
            <Route path='/settings' element={<Settings/>}/>
            <Route path='/users/' element={<UsersContainer/>}/> 
          </Routes> 
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
