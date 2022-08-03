import React, { useState } from 'react';

type User = {
    id: number,
    name: string,
}

function UseState() {
    const [count, setCount] = useState<number>(0);
    const [user, setUser] = useState<User>({} as User);

    const handleIncrease = () => setCount(prev => prev + 1);
    const handleDecrease = () => setCount(prev => prev - 1);
    
    const addUser = () => setUser({id: 1, name: "Tasib"});

    return (
        <div>
            <h2>useState hook</h2>

            <h2>Count - {count}</h2>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>

            <br />

            <button onClick={addUser}>Add User</button>
            <h4>{user.name}</h4>
        </div>
    );
}

export default UseState;