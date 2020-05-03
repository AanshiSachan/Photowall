
import Posts from '../data/posts';
//import { removePost } from './actions';
const postReducer = function posts(state = Posts,action){
    //removePhoto action
    // console.log(action.index);
    // return state
switch(action.type)
{
    case 'REMOVE_POST': return[...state.slice(0,action.index) ,...state.slice(action.index + 1)]
    case 'ADD_POST': return[...state,action.post]
    default: return state
}

}
export default postReducer;