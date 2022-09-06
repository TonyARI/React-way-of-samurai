import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './Profile-reducer';
import messageReducer from './Message-reducer';
import sidebarReducer from './Sidebar-reducer';
import usersReducer from "./Users-reducer";
import authReducer from "./Auth-reducer";
import thunk from 'redux-thunk';

let reducers=combineReducers({
    profilePage: profileReducer, 
    messagesPage: messageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store=createStore(reducers, applyMiddleware(thunk));
export default store;