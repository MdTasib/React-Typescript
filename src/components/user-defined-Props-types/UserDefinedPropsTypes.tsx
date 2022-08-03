import ArrayOfObject from "./ArrayOfObject";
import DataFetch from "./DataFetch";
import User from "./User";
import UserObject from "./UserObject";

function UserDefinedPropsTypes() {
    // Object
    const user1 = {
        name: "Rafi",
        age: 24,
        isStudent: true,
        lang: ["Bangla", "English", "Hindi"]
    }

    // Array of object
    const users = [
        {
            id: 1,
            name: "Rafi",
            email: "rafi@gmail.com"
        },
        {
            id: 2,
            name: "Rakib",
            email: "rakib@gmail.com"
        }
    ]

    return (
        <div>
            <h2>User Definded Props Types</h2>
            <ul>
                <li>Object</li>
                <li>Array</li>
                <li>Enum</li>
                <li>Union</li>
                <li>Any</li>
                <li>Custom Type</li>
            </ul>
            <User name="Tasib" age={20} isStudent={true} lang={["Bangla", "English"]}/>
            {/* object type */}
            <UserObject user={user1}/>
            {/* Array of object */}
            <ArrayOfObject users={users}/>

            {/* Data Fetch */}
            <DataFetch status="success"/>
        </div>
    );
}

export default UserDefinedPropsTypes;