import messageReducer from "./Message-reducer"
import profileReducer from "./Profile-reducer"
import sidebarReducer from "./Sidebar-reducer"

let store={
  _callSubscriber(){
    console.log('State was changed');
  },
  getState(){
    return this._state;
  },
  subscribe(observer){
    this._callSubscriber=observer;
  },
  dispatch(action){ //{type: 'ADD-POST'}
    this._state.profilePage=profileReducer(this._state.profilePage, action);
    this._state.messagesPage=messageReducer(this._state.messagesPage, action);
    this._state.sidebar=sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  }
}


export default store;
window.store=store;