type UserType = {
    name: string,
    age: number,
    isStudent: boolean,
    lang: string[],
}

function User({name, age, isStudent, lang}: UserType) {
    return (
        <div>
            <h3>{name}</h3>
            <p>{age} years old</p>
            {isStudent ? <p>Is a student</p> : <p>Isn't a student</p>}
            <ul>
                {
                    lang.map((value, index) => (
                        <li key={index}>{value}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default User;