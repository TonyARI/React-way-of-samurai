import { connect } from "react-redux";
import { follow, setPage, setUsers, setUsersTotalCount, toggleisFetching, unfollow } from "../Redux/Users-reducer";
import * as axios from 'axios';
import React from 'react';
import Users from './Users';
import Preloader from "../components/Common/Prealoader";


class UsersApi extends React.Component {
    constructor(props) {
        super(props);
       }
   
    componentDidMount() {
        this.props.toggleisFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response=>{
            this.props.toggleisFetching(false);
            if(this.props.users.length===0) {
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount);
            }
        })
    }
    pageChange=(page)=> {
        this.props.setPage(page)
        this.props.toggleisFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response=>{
            this.props.toggleisFetching(false);
           this.props.setUsers(response.data.items)
        })
    }
    render() {
      return <>
        {this.props.isFetching? <Preloader/>: null}
        <Users totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    pageChange={this.pageChange}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}/>
      </>
      
}}


let mapStateToProps=(state)=>{
    return{
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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

export default connect(mapStateToProps, {follow, unfollow, setUsers, setPage, setUsersTotalCount, toggleisFetching })(UsersApi);