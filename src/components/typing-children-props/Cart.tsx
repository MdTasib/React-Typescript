import React from 'react';

function Cart({children}: {children: React.ReactNode}) {
    return (
        <div style={{background: "black", padding: "2rem", color: "white", margin: "2rem"}}>
            {children}
        </div>
    );
}

export default Cart;