import Header from './Header';
import Login from './Login';

// export function Welcome({ loggedIn }) {
//     let header;

//     if (loggedIn) {
//         header = <Header />;
//     } else {
//         header = <Login />;
//     }
//     return (
//         <div>
//             {header}
//         </div>
//     );
// }

// export function Welcome({ loggedIn }) {
//     return (
//         <div>
//             {loggedIn && <Header />}
//             Note: if you don't see the header messsage,
//             you're not logged in.
//         </div>
//     )
// }

export function Welcome({ loggedIn }) {
    return (
        <div>
            {loggedIn ? <Header /> : <Login />}
        </div>
    )
}
 