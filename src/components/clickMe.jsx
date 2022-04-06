import React, { useContext, useEffect, useState } from 'react';
import { MoodContext } from '../App';

function ClickMe() {

    // This is the useState Hook
    const [count, setCount] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const happy = useContext (MoodContext)

    useEffect(() => {
        console.log("Count changed, useEffect ran")
        fetch('foo').then(() => setLoaded(true))

        return () => console.log("GOODBYE COMPONENT")
    },

    [count])
    console.log(count);
    console.log("setCount function is", setCount)
     // count = 0 | setCount() is my "set State" function only for count 

return (
    <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click Me {happy}
        </button>
    </div>
    )
}

export default ClickMe;