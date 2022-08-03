import Cart from './Cart';

type PostProps = {
    title: string,
    description: string
}

function Post({title, description}: PostProps) {
    return (
        <Cart>
            <h3>{title}</h3>
            <p>{description}</p>
        </Cart>
    );
}

export default Post;