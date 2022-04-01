import React, { useContext } from "react";
import {GlobalInfo} from './Hooks'
import SuperChild from "./SuperChild";

const Child = () => {
    const {appColor} = useContext(GlobalInfo);
    // console.warn("appColor",appColor);

    return (
   <div>
       <h1 style={{color:appColor}}>Child Component</h1>
       <SuperChild />
   </div>
    )
}
export default Child