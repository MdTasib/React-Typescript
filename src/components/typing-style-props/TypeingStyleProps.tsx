import Button from './Button';

const buttonStyles = {
    background: "black",
    color: "white",
    padding: "1rem",
    margin: "2rem"
}

function TypeingStyleProps() {
    return (
        <div>
            <h3>Typing style props</h3>
            <Button btnStyle={buttonStyles}/>
        </div>
    );
}

export default TypeingStyleProps;