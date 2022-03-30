// import React, { Component} from "react";

// class Message extends Component {

//     constructor(){
//         super()

//         // a state is nothing but an object that is privately maintain inside a component
//         this.state = {
//             message: 'welcome visitor'
//         }
//     }
// // state can be change within the Component
// changeMessage() {
//     this.setState(
//         {
//         message: 'thank you for subscribing'
//         })
// }

//     render() {
//         return (
//             <div>
// {/* a state can influence what is rendered in the browser */}
//                 <h1> {this.state.message} </h1>
//                  <button onClick={() => this.changeMessage()}>Subscribe</button>
//             </div>
//         )
//     }
// }
// export default Message