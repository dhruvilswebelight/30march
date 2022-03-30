

import React from "react";

// function Greet() {
//     return <h1>hello dhruvil</h1>
// }

const Greet = (props) => {
console.log(props)
return <h1>hello {props.name}</h1>
}

export default Greet