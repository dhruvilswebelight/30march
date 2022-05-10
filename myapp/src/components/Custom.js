                       // custom hook

import React, { useState} from "react";

const useCustomCounter = () => 
{
    const [count, setCount] = useState(0);
    const handleIncrement = () => 
    {
        setCount(count + 1);
    };
    const handleDecrement = () => 
    {
        setCount(count - 1);
    };
    return{
        count,
        handleIncrement,
        handleDecrement
    };
}
export default useCustomCounter;