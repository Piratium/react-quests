import React, { useState } from 'react'


function MyComponent() {
    const [count, setCount] = useState(0);

    return (
        <div className='container'>
            <style>
                {`button { width: 100px; margin: 10px}`}
            </style>
            <h1 className='m-5 text-center'>{count}</h1>
            <div className='text-center'>
                <button className='btn btn-success' onClick={() => setCount(count + 1)}>+</button>
                <button className='btn btn-danger' onClick={() => setCount(count - 1)}>-</button>
            </div>
        </div>
    )
}

export default MyComponent
