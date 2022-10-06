import './App.css';
import { Provider } from 'react-redux';
import Profile from './components/Profile/Profile';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import React from 'react';
import { connect } from 'react-redux';
import {initialSuccesThunk} from './Redux/initialized-reducer'
import Preloader from './components/Common/Prealoader';
import store from './Redux/Redux-store';



class App extends React.Component {
  componentDidMount() {
     this.props.initialSuccesThunk()
  }
  render() {
    if(!this.props.isInitialize) {
        return <Preloader/> 
    }
    return (
      <HashRouter>
        <div className="app-wraper">
            <HeaderContainer/>
          <div className='app-wraper-content'>
           <Routes>
               <Route path="/dialogs/*" element={<DialogsContainer/>}/> 
               <Route path="/profile/:userId" element={<Profile/>}/>
               <Route path="/profile/" element={<Profile/>}/> 
               <Route path='/users/' element={<UsersContainer/>}/> 
               <Route path='/login/' element={<Login/>}/> 
            </Routes> 
          </div>
        </div>
      </HashRouter>
    );
  }
}

let mapStateToProps=(state)=>({
  isInitialize: state.initialized.isInitialize
})

let AppContainer= connect(mapStateToProps, {initialSuccesThunk})(App);
let SamuraiJSApp=(props)=>{
  return <React.StrictMode>
        <Provider store={store}>
          <AppContainer/>
        </Provider>
      </React.StrictMode>
}

export default SamuraiJSApp;