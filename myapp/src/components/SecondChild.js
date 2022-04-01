import React, { useContext } from "react";
import {GlobalInfo} from './Hooks'

const SecondChild = () => {
    const {appColor} = useContext(GlobalInfo);
  

    return (
   <div>
       <h1 style={{color:appColor}}>SecondChild Component</h1>
   </div>
    )
}
export default SecondChild