import React, { ChangeEvent, FormEvent, useState } from 'react';

function FormEvents() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }
    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const user = {name, email};
        console.log(user);

        setName('');
        setEmail('');
    }

    return (
        <div>
            <h3>Typing form event</h3>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">
                        Name
                        <input type="text" name='name' id='name' value={name} onChange={handleNameChange} />
                    </label>
                </div>
                <div>
                    <label htmlFor="email">
                        Email
                        <input type="text" name='email' id='email' value={email} onChange={handleEmailChange} />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FormEvents;