type UserObjectType = {
   user: {
    name: string,
    age: number,
    isStudent: boolean,
    lang: string[],
   }
}

function UserObject({user: {name, age, isStudent, lang}}: UserObjectType) {
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

export default UserObject;