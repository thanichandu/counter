import React, { useState } from 'react';

function Heading() {
    let [count, setCount] = useState(0)
    function increment() {
        setCount(count + 1);

    }
    function decrement() {
        setCount(count - 1);
        console.log(count);

    }
    function Reset() {
        setCount(0);

    }
    return <div>
        <center><div className='counter'>
            <div className='inner-part'>
                <p style={{color:"red"}}>Counter App!</p>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={Reset}>Reset</button>
            </div>
        </div>
        </center>

    </div>
}
export default Heading;