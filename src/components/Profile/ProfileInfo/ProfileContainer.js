import ProfileInfo from "./ProfileInfo";
import React, { Component } from "react";
import * as axios from 'axios';
import { connect } from "react-redux";
import { setProfile } from "../../../Redux/Profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";

class ProfileApi extends React.Component {
    componentDidMount() {
        let userId=this.props.router.params.userId;
        if(!userId) {
            userId=2;
        }
        console.log(userId);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response=>{
        this.props.setProfile(response.data);
      })
    }
     render() {
        return <ProfileInfo {...this.props} profile={this.props.profile}/>
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
    }
}


let ProfileContainer=connect(mapStateToProps, {setProfile})(WithRouter(ProfileApi));
export default ProfileContainer;