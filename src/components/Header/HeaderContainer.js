import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logoutMeThunk } from '../../Redux/Auth-reducer';

class HeaderContainer extends React.Component {
  
    render() {
        return <Header {...this.props} logoutMeThunk={this.props.logoutMeThunk} isAuth={this.props.isAuth}/>
    }
}

let mapStateToProps=(state)=>{
    return {
        isAuth: state.auth
    }
}

export default connect(mapStateToProps, {logoutMeThunk})(HeaderContainer)

