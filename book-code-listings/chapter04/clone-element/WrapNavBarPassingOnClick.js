import NavBar from "./NavBar";
import NavItem from "./NavItem";

export function WrapNavBarPassingOnClick(props) {
  return (
    <>
      <NavBar
        onClick={() => {
          console.log("clicked");
        }}
      >
        <NavItem />
        <NavItem />
        <NavItem />
      </NavBar>
      
    </>
  );
}

// export default WrapNavBarPassingOnClick;
