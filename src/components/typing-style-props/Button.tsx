import React from 'react';

type ButtonProps = {
    btnStyle: React.CSSProperties
}

function Button({btnStyle}: ButtonProps) {
    return (
        <button style={btnStyle}>Click Me</button>
    );
}

export default Button;