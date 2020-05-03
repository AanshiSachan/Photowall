// import React from 'react';

// function Photo(props){
//     const post = props.post
//         return <figure className='figure'>
//         <img className="photo" src={post.imageLink} alt={post.descripton}   />
//         <figcaption><p> {post.descripton} </p></figcaption>
//         <div className='button-container'>
//         <button onClick = {()=>{
//             props.onRemovePhoto(post)
//         }}> Remove </button>
//         </div>

//         </figure>
// }
// // Photo.propTypes={
// //     post:propTypes.object.isRequired,
// // }

// export default Photo;

import React from 'react';
import PropTypes from 'prop-types'
function Photo(props) {
 const post = props.post
 return <figure className="figure"> 
 <img className= "photo" src={post.imageLink} alt={post.description} />
 <figcaption> <p> {post.description} </p> </figcaption>
 <div className = "button-container">
 <button onClick = {() => {
//  props.onRemovePhoto(post)
// props.removePost(1)
props.removePost(props.index)
//props.onHistory.push('/')
 }}> Remove </button>
 </div>
 </figure>
}
Photo.propTypes = {
 post: PropTypes.object.isRequired,

}
export default Photo