import React, { ChangeEvent, MouseEvent, useState } from 'react';

function TypeingEvent() {
    const [user, setUser] = useState('');

    // onChange event
    const handleUser = (event: ChangeEvent<HTMLInputElement>) => {
        setUser(event.target.value);
    }

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        console.log(user);
        setUser("");
    }

    return (
        <div>
            <h2>Typing events</h2>

            {/* onChange event */}
            <input type="text" value={user} onChange={handleUser}/>
            <p>{user}</p>

            {/* onClick event */}
            <button onClick={handleClick}>Show Console</button>
        </div>
    );
}

export default TypeingEvent;