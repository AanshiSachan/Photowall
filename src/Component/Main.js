// import React , {Component} from 'react';
// import Title from './Title';
// import Photowall from './PhotoWall';
// import AddPhoto from './AddPhoto';
// import {Route} from 'react-router-dom';

// class Main extends Component{
//     constructor(){
//         super()
//     }
        
          
             
// //         this.state={
// //             posts:[{
// //             id:0,
// //             description:"beautiful pic",
// //             imageLink:'https://source.unsplash.com/random'
// //         },{
// //             id:1,
// //             description:'nyc pic',
// //             imageLink:"https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
// //         },{
// //             id:2,
// //             description:'good pic',
// //             imageLink:"https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
// //             "3919321_1443393332_n.jpg"

// //         }],
// //         screen:'photos' //photoes , addPhotes
// //         }
// //         this.removePhoto = this.removePhoto.bind(this);
// //         this.navigate = this.navigate.bind(this);
// //     }
// //     ....method
// //      removePhoto(postRemove){
// //      console.log(postRemove.description)
// //      this.setState((state)=>({
// //          posts:state.posts.filter(post => post !== postRemove)
// //      }))
// //     }

// //     addPhoto(postSubmitted){
// //         this.setState(state =>({
// //             posts:state.posts.concat([postSubmitted])
// //         }))
// //     }
    
// //     navigate(){
// //         this.setState({
// //             screen:'addPhoto'
// //         })
// //     } 

// //      componentDidUpdate(){
// //       alert('re-render')
    
// //    } 
        
//     render(){
//         //console.log(this.props.posts);
//       return(
//       <div>
      
// {/*          
//                this.state.screen === 'photos' && (
//         <div>
//                <Title title={'Photowall'}/>
//                <Photowall posts={this.state.posts} onRemovePhoto = {this.removePhoto} onNavigate ={this.navigate}/>
        
//         </div>
//             )}
//     {
//         this.state.screen ==='addPhoto' && (

//         <div>
//             <AddPhoto/>
//         </div>
//         )} */}
       

//  <Route exact path = "/" render ={()=>(
//     <div>
//         <Title title={'Photowall'}/>
//         {/*<Photowall posts={this.state.posts} onRemovePhoto = {this.removePhoto} onNavigate ={this.navigate}/>*/}
//         <Photowall posts = {this.props.posts}/>
//     </div>
//        )}/>

// {/* <Route path ="/AddPhoto" render = {({history})=>(
//     <AddPhoto onAddPhoto= {(addedPost)=>{
//     this.addPhoto(addedPost)
//     history.push('/')

//     }}/>
    
// )}/> */}

// </div>
//       )}

// }

//   export default Main;




import React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route,Link} from 'react-router-dom'
import posts from '../data/posts'
import {removePost} from '../redux/actions'
class Main extends Component {
 constructor() {
 super()
  }
//      componentDidMount(){
//      this.props.removePost(1)
//  }
// removePhoto(postRemove){
//   debugger;
//   console.log(postRemove.description)
//   this.setState((state)=>({
//       posts:state.posts.filter(post => post !== postRemove)
//   }))
// }
  

 render() {
 console.log(this.props);
 console.log(this.state);
 return ( 
 
 <div>
   <h1>
  <Link to = "/"> Photowall </Link>
 </h1>
 <Route exact path = "/" render={() => (
 <div>
 {/* <PhotoWall posts ={posts} />  */}
  {/* <PhotoWall {...this.props} />  */}

 <PhotoWall {...this.props} onNavigate = {this.navigate}/>
 </div>
 )}/> 
 <Route path= "/AddPhoto" render = {({history}) => (
//  <AddPhoto onAddPhoto={(addedPost) => {
//  history.push('/')
//}}/>
<AddPhoto {...this.props} onHistory ={history}/>
 )}/>
 </div>
 )
 }
}
export default Main

