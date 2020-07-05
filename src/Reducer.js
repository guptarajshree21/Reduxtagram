import postData from "./data/posts";
import commentData from "./data/comments";
const initialState={
  posts: postData,
  comments: commentData,
}

const reducer =(state= initialState, action)=>{
console.log(state)
switch(action.type){
  case 'INCREMENT':
    return{
      ...state,
      posts: state.posts.map(i=>i.id === action.id ?{
        ...i,
        likes: i.likes+1
      }:
      i)
}
case 'DELETE':
  return{
    ...state,
    posts: state.posts.filter(i=>i.id != action.id)
  }
 default:
  return state;
}
}
export default reducer;
