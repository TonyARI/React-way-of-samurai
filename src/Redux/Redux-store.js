import { combineReducers, createStore } from "redux";
import profileReducer from './Profile-reducer';
import messageReducer from './Message-reducer';
import sidebarReducer from './Sidebar-reducer';
import usersReducer from "./Users-reducer";

let reducers=combineReducers({
    profilePage: profileReducer, 
    messagesPage: messageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});

let store=createStore(reducers);
export default store;