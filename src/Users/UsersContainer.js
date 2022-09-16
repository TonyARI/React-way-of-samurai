import { connect } from "react-redux";
import { follow, setPage, setUsers, setUsersTotalCount, toggleisFetching, unfollow, toggleFollowingButton, getUsersThunk, followThunk, unfollowThunk } from "../Redux/Users-reducer";
import * as axios from 'axios';
import React from 'react';
import Users from './Users';
import Preloader from "../components/Common/Prealoader";



class UsersApi extends React.Component {
    constructor(props) {
        super(props);
       }
   
    componentDidMount() {
      this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    }
    pageChange=(page)=> {
        this.props.getUsersThunk(page, this.props.pageSize);
    }
    render() {
      return <>
        {this.props.isFetching? <Preloader/>: null}
        <Users totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    pageChange={this.pageChange}
                    toggleFollowingButton={this.props.toggleFollowingButton}
                    toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                    follow={this.props.followThunk}
                    unfollow={this.props.unfollowThunk}/>
                    
      </>
      
}}


let mapStateToProps=(state)=>{
    return{
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        toggleFollowingInProgress: state.usersPage.toggleFollowingInProgress
    }
}
/* let mapDispatchToProps=(dispatch)=>{
    return {
        follow: (userId)=>{
            dispatch(followAC(userId));
        },
        unfollow: (userId)=>{
            dispatch(unfollowAC(userId));
        },
        setUsers: (users)=>{
            dispatch(setUsersAC(users));
        },
        setPage: (page)=>{
            dispatch(setPageAC(page));
        },
        setUsersTotalCount: (count)=>{
            dispatch(setUsersTotalCountAC(count));
        },
        toggleisFetching: (fetching)=>{
            dispatch(toggleisFetching(fetching));
        }
    }
} */

export default connect(mapStateToProps, {follow, unfollow, setUsers, setPage, setUsersTotalCount, toggleisFetching, toggleFollowingButton, getUsersThunk, followThunk, unfollowThunk })(UsersApi);