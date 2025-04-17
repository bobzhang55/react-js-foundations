import Cart from './Cart';

export function DriveCart() {
    //let inCart = [];
    let inCart = [{ id: 1, title: "React JS Foundations", price: 5 },
        { id: 2, title: "Angular JS Foundations", price: 50 }
    ];
    
    return (
        <div>
            <Cart inCart={inCart}></Cart>
        </div>
    );
}