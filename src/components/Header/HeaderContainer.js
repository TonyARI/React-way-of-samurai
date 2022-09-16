import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { authMeThunk } from '../../Redux/Auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMeThunk();
    }
    render() {
        return <Header {...this.props} isAuth={this.props.isAuth}/>
    }
}

let mapStateToProps=(state)=>{
    return {
        isAuth: state.auth
    }
}

export default connect(mapStateToProps, {authMeThunk})(HeaderContainer)

