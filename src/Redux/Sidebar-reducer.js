
let initialState={
    friends:[
        {ava: "http://sun9-12.userapi.com/sun9-57/s/v1/if2/HG1vf__WySzhNoI-ni4ChPCNsSgwmvmvj83F0GUU1npk8Cs15DjA6M_7UX-_eZBIdfm5EwnjjtlNFx5yy13sC0BQ.jpg?size=200x212&quality=96&crop=0,0,200,212&ava=1", name: 'Kirill'},
        {ava: "https://meragor.com/files/styles//ava_800_800_wm/ava-dlya-vk-001.png", name: 'Sasha'},
        {ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsusgF4oEZJLafSM1KRgCprtfD3kL8934JWQ&usqp=CAU", name: 'Sveta'},
    ]
}
const sidebarReducer=(state=initialState.friends, action)=>{
    return state;
}

export default sidebarReducer;