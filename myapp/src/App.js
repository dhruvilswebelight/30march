// import React, { Component, useContext,  useEffect } from 'react';
// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import './App.css';
// import MyForm from './form';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Hooks from './components/Hooks';
// import Login from './Login'

// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import Login from './components/Login';
// import SignUp from './components/SignUp';



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

// const App = () => {
//     return (
//     <Router>
//       <div className='App'>
     
//         {/* <Greet name="yash"/>
//         <Greet name="nikhil"/>
//          <Greet name="nirav"/> 
//         <Welcome /> */}
//      {/* <Hooks />   */}
//      {/* <Login /> */}
     
//      <Route exact path='/' component={Login} />
//             <Route path="/sign-in" component={Login} />
//             <Route path="/sign-up" component={SignUp} />
//       </div>
//       </Router>
//     );
  
// }

//  export default App

 
 import React, { Suspense, lazy } from 'react';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
 const Login = lazy(() => import('./components/Login'));
 const SignUp = lazy(() => import('./components/SignUp'));
 
 const App = () => (
   <Router>
     <Suspense fallback={<div>Loading...</div>}>
       <Routes>
         <Route path="/" element={<SignUp />} />
         <Route path="/" element={<Login />} />
       </Routes>
     </Suspense>
   </Router>
 )
export default App