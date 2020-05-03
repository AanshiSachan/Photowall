//remove
 export function removePost(index){       //ES5 function (action creator)
    return{
        type:'REMOVE_POST',          //action
        index                 //action
    }
}

export function addPost(post){
    return{
        type:'ADD_POST',
        post
    }
}