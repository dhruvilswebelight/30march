import React, { Component } from 'react';
import './App.css';
import MyForm from './form';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

// const  App = () => {
//   return (
  //   <div >
  //     <header >
  //       <div>Hello World</div>
  //       <div>
  //     <h1>Hello, world!</h1>
  //     <h2>It is {new Date().toLocaleTimeString()}.</h2>
  //   </div>
  //   <h1 className="greeting">
  //   Hello, world!
  // </h1>

  
        
  //     </header>
  //   </div>
//   );
// }

// const  Welcome = (props) => {
//   return <h1>Hello, {props.name}</h1>;
// }

// const App = () => {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//       <div >
//       <header >
//         <div>Hello World</div>
//         <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//     <h1 className="greeting">
//     Hello, world!
//   </h1>
//   <MyForm name={"First Name"} lastName={"skjbfeklfndsdgnwdln"} submitName={'Please submit'}/> 
//     </header>
//     </div>
//     </div>
    

    
//   );
// }

// const FancyBorder = (props) => {
//   return (
//     <div className={'FancyBorder FancyBorder-' + props.color}>
//       {props.children}
//     </div>
//   );
// }
// const WelcomeDialog = () => {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">
//         Welcome
//       </h1>
//       <p className="Dialog-message">
//         Thank you for visiting our spacecraft!
//       </p>
//     </FancyBorder>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className='App'>
     
        {/* <Greet name="yash"/>
        <Greet name="nikhil"/>
         <Greet name="nirav"/> 
        <Welcome />
        <Message /> */}
       <Counter />
       
      </div>
    );
  }
}

export default App