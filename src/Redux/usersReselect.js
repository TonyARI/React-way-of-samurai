import { createSelector } from "reselect"

export let getUsers=(state)=>{
    return state.usersPage.users
}

export let getUsersSuper=createSelector(getUsers,(users)=>{
    return users.filter(u=>true)
})

export let gettotalUsersCount=(state)=>{
    return state.usersPage.totalUsersCount
}

export let getpageSize=(state)=>{
    return state.usersPage.pageSize
}

export let getcurrentPage=(state)=>{
    return state.usersPage.currentPage
}

export let getisFetching=(state)=>{
    return state.usersPage.isFetching
}

export let gettoggleFollowingInProgress=(state)=>{
    return state.usersPage.toggleFollowingInProgress
}