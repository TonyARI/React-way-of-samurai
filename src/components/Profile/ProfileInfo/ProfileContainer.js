import ProfileInfo from "./ProfileInfo";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getProfileThunk, setStatusThunk, updateStatusThunk } from "../../../Redux/Profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileApi extends React.Component {
    componentDidMount() {
        let userId=this.props.router.params.userId;
        if(!userId) {
            userId=2;
        }
        this.props.getProfileThunk(userId);
        this.props.setStatusThunk(userId);
    }
     render() {
        return <ProfileInfo {...this.props} status={this.props.status} updateStatusThunk={this.props.updateStatusThunk} profile={this.props.profile}/>
    } 
}

function WithRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location=useLocation();
        let navigate=useNavigate();
        let params=useParams();
        return (
            <Component {...props} router={{location, navigate, params}}/>
        )
    }
    return ComponentWithRouterProp;
}

let mapStateToProps=(state)=>{
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, {getProfileThunk, setStatusThunk, updateStatusThunk}),
    withAuthRedirect,
    WithRouter
)(ProfileApi)

/* let authRedirect=withAuthRedirect(WithRouter(ProfileApi))
let ProfileContainer=connect(mapStateToProps, {getProfileThunk})(authRedirect);
export default ProfileContainer; */