import Cart from './SingleComponentCart';

export function DriveCart() {
    //let InitialItemsInCart = [];
    let InitialItemsInCart = [{ id: 1, title: "React JS Foundations", price: 5 },
        { id: 2, title: "Angular JS Foundations", price: 50 }
    ];
    
    return (
        <div>
            <Cart inCart={InitialItemsInCart}></Cart>
        </div>
    );
}