import Header from "./Header";
import { Login } from "./Login";

export function Welcome({ loggedIn }) {
  let header;

  if (loggedIn) {
    header = <Header />;
  } else {
    header = <Login />;
  }
  return (
    <>
      <div>{header}</div>
      
    </>
  );
}

// export default Welcome;