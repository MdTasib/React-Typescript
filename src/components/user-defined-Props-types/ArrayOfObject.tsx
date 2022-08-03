type ArrayOfObjectProps = {
    users: {
        id: number,
        name: string,
        email: string,
    }[]
};

function ArrayOfObject({users}:ArrayOfObjectProps) {
    return (
        <div>
            <h3>Array Of Object</h3>
            {
                users.map(user => (
                    <div key={user.id}>
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default ArrayOfObject;