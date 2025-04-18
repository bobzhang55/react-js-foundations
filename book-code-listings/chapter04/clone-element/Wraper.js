import NavBar from "./NavBar";
import NavItem from "./NavItem";

export function Wraper(props) {
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

// export default Wraper;
