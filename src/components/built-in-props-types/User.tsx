type UserType = {
    name: string;
    age: number;
    isLoggedIn: boolean;
};

function User({name, age, isLoggedIn}: UserType) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{age} years old</p>
            {isLoggedIn ? <p>User is login</p> : <p>User is logout</p>}
        </div>
    );
}

export default User;