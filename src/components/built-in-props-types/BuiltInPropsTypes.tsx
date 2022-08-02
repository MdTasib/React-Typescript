import React from "react";
import User from "./User";

function BuiltInPropsTypes() {
	return <div>
		<h3>Built in Props types</h3>
		<User name='Mohammad Tasib' age={20} isLoggedIn={true}/>
		<User name="Rafi" age={24} isLoggedIn={false}/>
	</div>;
}

export default BuiltInPropsTypes;
