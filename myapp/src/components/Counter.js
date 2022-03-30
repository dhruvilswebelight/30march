
import React, { Component, useState, useEffect, useContext } from "react";

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
//     }
// }
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
        
const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };
  
  const ThemeContext = React.createContext(themes.light);
  
  const App = () => {
    return (
      <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
  
  const Toolbar = (props) => {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }
  
  const ThemedButton = () => {
    const theme = useContext(ThemeContext);
    return (
      <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
      </button>
    );
  }
export default App
