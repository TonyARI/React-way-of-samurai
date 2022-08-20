import './App.css';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Users from './Users/Users';
import UsersContainer from './Users/UsersContainer';





function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wraper">
          <Header/>
          <Nav />
        <div className='app-wraper-content'>
         <Routes>
             <Route path="/dialogs/*" element={<DialogsContainer/>}/> 
            <Route path="/profile" element={<Profile/>}/>
             <Route path='/news' element={<News/>}/>
            <Route path='/music' element={<Music/>}/>
            <Route path='/settings' element={<Settings/>}/>
            <Route path='/users' element={<UsersContainer/>}/> 
          </Routes> 
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
