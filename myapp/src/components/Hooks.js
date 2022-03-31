
// import React, { Component, useState, useEffect, useContext } from "react";
// import React, { createContext, useState, useContext, useMemo, useReducer } from 'react';

// import { useRef } from "react";

// class Counter extends Component 

// {
//     constructor(props) {

//         super(props)
//         this.state = {
//             count: 0
//         }
//     }
// increment(){
//     this.setState({
//         count: this.state.count + 1 
//     })
    
// }

//     render() {
//           return (
//               <div>
//                        <div>count - {this.state.count } </div>
//                        <button onClick={() => this.increment()}>Increment</button>
//               </div>
             
//           )  
//     userName: '',
//     setUserName: () => {},
//   });
//   const App = () => {
//     const [userName, setUserName] = useState('dhruvil suhagiya');
//     const value = useMemo(
//       () => ({ userName, setUserName }), 
//       [userName]
//     );

                              // useState Hook


// const Counter = () => 
// {
//       const [count, setCount] = useState(0);

//  useEffect(() => {
//           document.title =  count;
//       })
    
// return (
//           <div>
//             <h1>Count - {count} </h1>
//             <button onClick={() => setCount(count + 1)}>
//             Click me
//         </button><br></br>
//         <button onClick={() => setCount(count-1)}>Click me</button>
//          </div>
//        );
// }
// export default Counter


                      // useState , useEffect Hook
                      
// const App = () => {
//     const [news, setNews] = useState([]);
//     const fetchNews = () => {
//         fetch("http://hn.algolia.com/api/v1/search?query=react")
//         .then(result => result.json())
//         .then(data => setNews(data.hits))
//         .catch(error => console.log(error));
//     }
//     useEffect(() => {
//         fetchNews()
//     });
        
//     return(
//         <div>
//             <h2>News</h2>
//             {news.map((n,i) => (
//             <p key={i}>{n.title}</p>))}
//         </div>
//     )
//             };
        

                 // usecontext hook

// const themes = {
//     light: {
//       foreground: "#000000",
//       background: "#eeeeee"
//     },
//     dark: {
//       foreground: "#ffffff",
//       background: "#222222"
//     }
//   };
  
//   const ThemeContext = React.createContext(themes.light);
  
//   const App = () => {
//     return (
//       <ThemeContext.Provider value={themes.dark}>
//         <Toolbar />
//       </ThemeContext.Provider>
//     );
//   }
  
//   const Toolbar = (props) => {
//     return (
//       <div>
//         <ThemedButton />
//       </div>
//     );
//   }
  
//   const ThemedButton = () => {
//     const theme = useContext(ThemeContext);
//     return (
//       <button style={{ background: theme.background, color: theme.foreground }}>
//         I am styled by theme context!
//       </button>
//     );
//   }

                    //    useContext, useMemo

// const UserContext = createContext({
//     userName: '',
//     setUserName: () => {},
//   });
//   const App = () => {
//     const [userName, setUserName] = useState('dhruvil suhagiya');
//     const value = useMemo(
//       () => ({ userName, setUserName }), 
//       [userName]
//     );
    
//     return (
//       <UserContext.Provider value={value}>
//         <UserNameInput />
//         <UserInfo />
//       </UserContext.Provider>
//     );
//   }
//   const UserNameInput = () => {
//     const { userName, setUserName } = useContext(UserContext);
//     const changeHandler = event => setUserName(event.target.value);
//     return (
//       <input
//         type="text"
//         value={userName}
//         onChange={changeHandler}
//       />
//     );
//   }
//   const UserInfo =() =>{
//     const { userName } = useContext(UserContext);
//     return <span>{userName}</span>;
//   }

                        // useReducer hook

// const initialState = 0;
// const reducer = (state, action) => {
//     console.log(state, action);
//     if(action.type === "Increment"){
//         return state + 1;
//     }
//     if(action.type === "Decrement"){
//         return state - 1;
//     }
//       return state;
// }                        
// const UseReducer = () => {
//     const [state, dispatch] = useReducer(reducer, initialState);


//     return(
//         <div>
//             <h1>{state}</h1>
//             <div className='btnstylePosition'>
//                 <button onClick={() => dispatch({type: "Increment"})}>Inc</button>
//                 <button onClick={() => dispatch({type: "Decrement"})}>Dec</button>
//             </div>

//         </div>
//     )
// }

// export default UseReducer


                        // useCallback hook

// import React, { useState, useCallback } from 'react'
// var funccount = new Set();
// const App = () => {


// const [count, setCount] = useState(0)
// const [number, setNumber] = useState(0)

// const incrementCounter = useCallback(() => {
// setCount(count + 1)
// }, [count])
// const decrementCounter = useCallback(() => {
// setCount(count - 1)
// }, [count])
// const incrementNumber = useCallback(() => {
// setNumber(number + 1)
// }, [number])

// funccount.add(incrementCounter);
// funccount.add(decrementCounter);
// funccount.add(incrementNumber);
// alert(funccount.size);

// return (
// 	<div>
// 	Count: {count}
// 	<button onClick={incrementCounter}>
// 		Increase counter
// 	</button>
// 	<button onClick={decrementCounter}>
// 		Decrease Counter
// 	</button>
// 	<button onClick={incrementNumber}>
// 		increase number
// 	</button>
// 	</div>
// )
// }


// export default App;
 
                            // useMemo hook

// import React, { useState, useMemo } from "react";

// const App = () => 
// {
//     const [count, setCount] = useState(0);
//     const [item, setItem] = useState(10);

//     const multiCountMemo = useMemo(function multiCount()
//      {
//         console.warn("multiCount");
//         return count *5
//      },[count])

//         return(
//                 <div className="App">
//                     <h1>useMemo Hook in React</h1>
//                     <h2>count: {count}</h2>
//                     <h2>Item: {item}</h2>
//                     <h2>{multiCountMemo}</h2>
//                     <button onClick={() => setCount(count + 1)}>update Count</button>
//                     <button onClick={() => setItem(item*10)}>update Item</button>
//                 </div>
//               )
// }
                    
// export default App;

                             // useRef hook - focus,color,value, DOM manipulation handle with useRef

import React, { useRef } from "react";

const App = () => 
{
    
     let inputRef = useRef(null)
      const handleInput = () => 
                {
                    console.warn("function call")
                    inputRef.current.value = 1000;
                    inputRef.current.focus();
                    inputRef.current.style.color = "red"
                    // inputRef.current.style.display = "none"
                }
    

    return(
            <div className="App">
                <h1>useRef in React</h1>
                <input type = "text" ref={inputRef}/>
                <button onClick={handleInput}>Handle Input</button>
            </div>
          );
}

export default App

                                // Custom Hook

// import React from "react";
// import useCustomCounter from "./Custom";

// const App = () => {
//     const data = useCustomCounter();
//     const data1 = useCustomCounter();

//     return(
//         <React.Fragment>
//             <h1>Count up: {data.count}</h1>
//             <button type="button" onClick={data.handleIncrement}>Increment</button>

//             <h1>Count up: {data1.count}</h1>
//             <button type="button" onClick={data1.handleIncrement}>Increment</button>
            
//         </React.Fragment>
//     )
// }

// export default App;