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
        </div>
    );
}

export default UserDefinedPropsTypes;