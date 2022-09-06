import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { authMe } from '../../Redux/Auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response=>{
            if(response.data.resultCode===0) {
                this.props.authMe(response.data.data.id, response.data.data.login, response.data.data.email )
            }
        })
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

export default connect(mapStateToProps, {authMe})(HeaderContainer)

