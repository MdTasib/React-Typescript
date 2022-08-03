import Button from "./Button";
import Post from "./Post";

function TypeingChildrenProps() {
    return (
        <div>
            <h2>Typing children props</h2>
            <Button>Click Me</Button>
            <Post title="Post Title 1" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis commodi fuga adipisci hic temporibus debitis."/>
            <Post title="Post Title 2" description="Ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis commodi fuga adipisci hic temporibus debitis."/>
            <Post title="Post Title 3" description="Amet consectetur adipisicing elit. Perspiciatis commodi fuga adipisci hic temporibus debitis."/>
        </div>
    );
}

export default TypeingChildrenProps;