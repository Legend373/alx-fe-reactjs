import React from 'react'
import { useState } from 'react'
function Counter() {
    const [Count, setCount] = useState(0)
    return (
        <div>
            <p style={{ color: "white" }}>Current Count: {Count}</p>
            <button onClick={() => setCount(Count + 1)}>Increment</button>
            <button onClick={() => setCount(Count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>

        </div>
    )
}

export default Counter
