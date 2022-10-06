import { addPostActionCreator, profileReducer } from "./Profile-reducer";




it('length of posts should be incremented', ()=>{
    let action=addPostActionCreator("it-kamasutra");
    let state={
        postsData: [
            {id:1, message: 'Hi', likesCount: 12},
            {id:2,message: 'How is your it-kamasutra', likesCount:23},
          ]
    }
    let newState=profileReducer(state, action);
    expect(newState.postsData.length).toBe(3); 

})

it('message should be correct', ()=>{
    let action=addPostActionCreator("it-kamasutra");
    let state={
        postsData: [
            {id:1, message: 'Hi', likesCount: 12},
            {id:2,message: 'How is your it-kamasutra', likesCount:23},
          ]
    }
    let newState=profileReducer(state, action);
    expect(newState.postsData[2].message).toBe("it-kamasutra"); 

})