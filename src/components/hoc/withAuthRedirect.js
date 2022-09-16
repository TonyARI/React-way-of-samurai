import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToProps=(state)=>{
    return ({
        isAuth: state.auth.isAuth
    })
}

function withAuthRedirect(Component) {
    class Redirect extends React.Component {
        render() {
            if(!this.props.isAuth) {
                return <Navigate to='/Login'/>
            }
            return <Component {...this.props}/>
        }
    }
    let connectRedirect=connect(mapStateToProps)(Redirect);
    return connectRedirect;
}

export default withAuthRedirect;